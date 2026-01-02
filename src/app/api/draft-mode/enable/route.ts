import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { client } from "@/sanity/lib/client";

const clientWithToken = client.withConfig({
  token: process.env.SANITY_API_READ_TOKEN,
});

export async function GET(request: Request) {
  console.log("Draft Mode Enable: Start");
  if (!process.env.SANITY_API_READ_TOKEN) {
    console.error("Draft Mode Enable: Missing SANITY_API_READ_TOKEN");
    return new Response("Missing SANITY_API_READ_TOKEN", { status: 500 });
  }

  try {
    const { isValid, redirectTo = "/" } = await validatePreviewUrl(
      clientWithToken,
      request.url
    );

    console.log(
      "Draft Mode Enable: isValid",
      isValid,
      "redirectTo",
      redirectTo
    );

    if (!isValid) {
      return new Response("Invalid secret", { status: 401 });
    }

    (await draftMode()).enable();

    console.log("Draft Mode Enable: Enabled successfully");
  } catch (error) {
    console.error("Draft Mode Enable: Error", error);
    return new Response("Internal Server Error: " + (error as Error).message, {
      status: 500,
    });
  }

  redirect("/");
}
