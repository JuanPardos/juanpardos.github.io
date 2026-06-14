import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    etiquetas: z.array(z.string()).default([]),
    fecha: z.coerce.date(),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { blog };
