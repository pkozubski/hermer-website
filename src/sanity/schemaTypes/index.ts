import { type SchemaTypeDefinition } from "sanity";

import { post } from "./post";
import { project } from "./project";
import { faqItem } from "./faqItem";
import { page } from "./page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project, faqItem, page],
};
