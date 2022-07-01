// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { userSettingsRepo, UserSettingType } from "../../../helper/api/userSettingsRepo";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    put(req, res);
  } else if (req.method === "DELETE") {
    _delete(req, res);
  }
}

function put(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, url, social } = req.body;
  if (!url || !social) {
    return res.status(422).json({ message: "invalid data" });
  }
  const userSetting: UserSettingType = {
    id: id,
    url: url,
    social: social
  }
  userSettingsRepo.update(userSetting);
  return res.status(200).json(userSetting);
}

function _delete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  userSettingsRepo.delete(id)
  return res.status(200).json(id);
}
