import type { NextApiRequest, NextApiResponse } from "next";

const getTotalValueLocked = async () => {
  return fetch("https://elementfi.s3.us-east-2.amazonaws.com/stats/tvl", {});
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getTotalValueLocked();
  const { tvl } = await response.json();

  return res.status(200).json(tvl);
}
