import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

const authorsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    image: z.string().optional(),
    bio: z.string().optional(),
    social: z.record(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'authors': authorsCollection,
};
