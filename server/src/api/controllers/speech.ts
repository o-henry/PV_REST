import { Request, Response } from "express";
import { fetchKakao } from "@lib/axios";

/**
 * @param GET /
 * Speech Module
 */

export const getSpeech = async (req: Request, res: Response) => {
  try {
    const response = await fetchKakao.post("/v1/recognize");
    console.log("speech: ", response);
    return res.status(200).json(response);
  } catch (error) {
    console.error("error :", error);
  }
};
