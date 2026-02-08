import { type SchemaTypeDefinition } from 'sanity';

import { post } from './post';
import { project } from './project';
import { faqItem } from './faqItem';
import { page } from './page';
import { category } from './category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, project, faqItem, page],
};
