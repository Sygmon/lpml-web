import { z } from "zod";

export type ArticleCard = {
  title: string;
  description: string;
  href: string;
  date?: string;
  cover?: string;
};

export type Article = {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  date?: string;
  cover?: string;
};

export const articleMetadataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  date: z.string().optional(),
  cover: z.string().optional(),
});

export type ArticleMetadata = z.infer<typeof articleMetadataSchema>;
