// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

const referencesCollection = defineCollection({
  loader: file('src/content/general/references.json'),
  schema: z.object({
    id: z.number(),
    fullname: z.string(),
    content: z.string(),
  }),
});

const aboutCollection = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content/general' }),
  schema: z.object({
    years: z.number(),
    estates: z.number(),
    clients: z.number(),
  }),
});

export const collections = {
  references: referencesCollection,
  about: aboutCollection,
};
