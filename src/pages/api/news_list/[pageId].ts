import { NextApiRequest, NextApiResponse } from "next";
import { getNewsPage } from "../../../lib/news";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pageId = req.query.pageId ? parseInt(req.query.pageId as string) : 1;
  res.status(200).json(getNewsPage(pageId));
}
