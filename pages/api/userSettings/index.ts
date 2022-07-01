// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { userSettingsRepo, UserSettingType } from "../../../helper/api/userSettingsRepo";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    post(req, res);
  } else if (req.method === "GET") {
    get(req, res);
  }

}

function post(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, url, social } = req.body;
  if (!url || !social) {
    return res.status(422).json({ message: "invalid data" });
    return;
  }
  const userSetting: UserSettingType = {
    id: 0,
    url: url,
    social: social
  }
  userSettingsRepo.create(userSetting);
  return res.status(200).json(userSetting);
}

function get(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(userSettingsRepo.getAll());
}
