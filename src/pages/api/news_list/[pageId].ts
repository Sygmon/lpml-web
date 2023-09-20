import { NextApiRequest, NextApiResponse } from "next";
import { getNewsPage } from "../../../lib/news";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pageId = req.query.pageId ? parseInt(req.query.pageId as string) : 1;
  const startDate = req.query.startDate
    ? parseInt(req.query.startDate as string)
    : null;
  const endDate = req.query.endDate
    ? parseInt(req.query.endDate as string)
    : null;
  res.status(200).json(getNewsPage(pageId, startDate, endDate));
}
