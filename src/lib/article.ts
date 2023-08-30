import { z } from "zod";

export const articleCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string(),
  date: z.string().optional().or(z.null()),
  cover: z.string().optional().or(z.null()),
});

export type ArticleCard = z.infer<typeof articleCardSchema>;

export type Article = {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  date?: string;
  cover?: string;
  ogTitle?: string;
};

export const articleMetadataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  date: z.string().optional(),
  cover: z.string().optional(),
  ogTitle: z.string().optional(),
});

export type ArticleMetadata = z.infer<typeof articleMetadataSchema>;
