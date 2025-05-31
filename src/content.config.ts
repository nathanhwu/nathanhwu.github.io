import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const resourcesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/resources" }),
  schema: z.object({
    sortIndex: z.number(),
    title: z.string(),
    author: z.string(),
    link:z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    })
  })
});

export const collections = {
  resources: resourcesCollection
};

