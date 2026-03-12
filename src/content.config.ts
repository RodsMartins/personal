import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    date: z.string(),
    featured: z.boolean().default(false),
  }),
});

const formations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/formations' }),
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    type: z.enum(['diplome', 'certification', 'formation', 'mooc']),
    date: z.string(),
    description: z.string(),
    link: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, formations };
