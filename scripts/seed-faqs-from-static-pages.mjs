import { createClient } from "@sanity/client";
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";

function loadEnvFile(filePath) {
  const content = readFileSync(filePath, "utf8");

  for (const line of content.split(/\r?\n/)) {
    if (!line || line.startsWith("#") || !line.includes("=")) {
      continue;
    }

    const eqIndex = line.indexOf("=");
    const key = line.slice(0, eqIndex).trim();
    const value = line.slice(eqIndex + 1).trim();

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function findMatchingBracket(source, startIndex) {
  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let i = startIndex; i < source.length; i++) {
    const ch = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === quote) {
        inString = false;
        quote = "";
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === "`") {
      inString = true;
      quote = ch;
      continue;
    }

    if (ch === "[") {
      depth++;
    } else if (ch === "]") {
      depth--;
      if (depth === 0) {
        return i;
      }
    }
  }

  return -1;
}

function extractFaqArrayLiteral(source) {
  const match = source.match(/const\s+[A-Za-z0-9_]*Faq\s*=\s*\[/);
  if (!match || typeof match.index !== "number") {
    return null;
  }

  const start = source.indexOf("[", match.index);
  if (start === -1) {
    return null;
  }

  const end = findMatchingBracket(source, start);
  if (end === -1) {
    return null;
  }

  return source.slice(start, end + 1);
}

function splitSentences(text) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) {
    return [];
  }

  const byPunctuation = normalized
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (byPunctuation.length > 1) {
    return byPunctuation;
  }

  const byComma = normalized
    .split(/,\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20);

  return byComma.length > 1 ? byComma : [normalized];
}

function extractKeyword(question) {
  const firstPart = question.split(/[?-]/)[0].trim();
  const compact = firstPart.replace(/\s+/g, " ").trim();
  const words = compact.split(" ").filter(Boolean);
  return words.slice(0, 6).join(" ");
}

function makeSpan(text, marks = []) {
  return {
    _type: "span",
    _key: `span-${Math.random().toString(36).slice(2, 10)}`,
    text,
    marks,
  };
}

function makeBlock(children, options = {}) {
  return {
    _type: "block",
    _key: `block-${Math.random().toString(36).slice(2, 10)}`,
    style: "normal",
    markDefs: [],
    children,
    ...options,
  };
}

function buildRichAnswer(question, answer) {
  const sentences = splitSentences(answer);
  if (sentences.length === 0) {
    return [makeBlock([makeSpan(answer)])];
  }

  const keyword = extractKeyword(question);
  const intro = sentences[0];
  let bullets = sentences.slice(1, 5);
  const closing = sentences.slice(5).join(" ").trim();

  if (bullets.length === 0) {
    bullets = [intro.replace(/[.;:]\s*$/, "")];
  }

  const blocks = [];

  if (keyword && intro.toLowerCase().includes(keyword.toLowerCase())) {
    const index = intro.toLowerCase().indexOf(keyword.toLowerCase());
    const before = intro.slice(0, index);
    const match = intro.slice(index, index + keyword.length);
    const after = intro.slice(index + keyword.length);

    blocks.push(
      makeBlock(
        [
          ...(before ? [makeSpan(before)] : []),
          makeSpan(match, ["strong"]),
          ...(after ? [makeSpan(after)] : []),
        ].filter(Boolean)
      )
    );
  } else if (keyword) {
    blocks.push(
      makeBlock([makeSpan(`${keyword}: `, ["strong"]), makeSpan(intro)])
    );
  } else {
    blocks.push(makeBlock([makeSpan(intro)]));
  }

  for (const bullet of bullets) {
    blocks.push(
      makeBlock([makeSpan(bullet.replace(/[.;:]\s*$/, ""))], {
        listItem: "bullet",
        level: 1,
      })
    );
  }

  if (closing) {
    blocks.push(makeBlock([makeSpan(closing)]));
  }

  return blocks;
}

function parseFaqItems(arrayLiteral) {
  try {
    const raw = Function(`"use strict"; return (${arrayLiteral});`)();
    if (!Array.isArray(raw)) {
      return [];
    }

    return raw
      .map((item, index) => {
        const question =
          typeof item?.question === "string" ? item.question.trim() : "";
        const answer = typeof item?.answer === "string" ? item.answer.trim() : "";

        if (!question || !answer) {
          return null;
        }

        return {
          _type: "faqItem",
          _key: `faq-${index + 1}`,
          question,
          answer: buildRichAnswer(question, answer),
        };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}

function slugFromFilePath(filePath) {
  const rel = relative(resolve(process.cwd(), "src/app"), resolve(filePath));
  const dir = dirname(rel).replace(/\\/g, "/");
  return dir === "." ? "home" : dir;
}

function makeDocId(slug) {
  return `page-${slug
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;
}

loadEnvFile(resolve(process.cwd(), ".env.local"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    "Brakuje zmiennych SANITY. Upewnij sie, ze NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET i SANITY_API_WRITE_TOKEN sa ustawione."
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const files = execSync('rg -l "const\\s+[A-Za-z0-9_]*Faq\\s*=\\s*\\[" src/app | sort', {
  encoding: "utf8",
})
  .trim()
  .split("\n")
  .filter(Boolean);

async function upsertFaqForFile(filePath) {
  const source = readFileSync(filePath, "utf8");
  const arrayLiteral = extractFaqArrayLiteral(source);
  if (!arrayLiteral) {
    console.log(`Pominieto (brak FAQ array): ${filePath}`);
    return;
  }

  const faqItems = parseFaqItems(arrayLiteral);
  if (faqItems.length === 0) {
    console.log(`Pominieto (puste FAQ): ${filePath}`);
    return;
  }

  const slug = slugFromFilePath(filePath);

  const existing = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{_id,title}`,
    { slug }
  );

  const docId = existing?._id || makeDocId(slug);
  const fallbackTitle = existing?.title || slug;

  await client.createIfNotExists({
    _id: docId,
    _type: "page",
    title: fallbackTitle,
    slug: {
      _type: "slug",
      current: slug,
    },
  });

  await client
    .patch(docId)
    .set({
      faqs: faqItems,
    })
    .setIfMissing({
      title: fallbackTitle,
      slug: {
        _type: "slug",
        current: slug,
      },
    })
    .commit();

  console.log(`OK: ${slug} -> ${faqItems.length} FAQ`);
}

async function run() {
  for (const file of files) {
    await upsertFaqForFile(file);
  }
  console.log(`Zakonczono. Zasilono FAQ dla ${files.length} plikow.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
