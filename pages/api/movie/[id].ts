import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function movieId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return movieDetail(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const movieDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await serverAuth(req, res);

    const { id = "" } = req.query as { id: string };

    if (typeof id !== "string") {
      return res.status(400).json({ message: "invalid id" });
    }

    if (!id) {
      return res.status(400).json({ message: "id empty" });
    }

    console.log({ id }, "aaajaja");

    const movies = await prismadb.movie.findUnique({
      where: {
        id,
      },
    });
    console.log(movies);
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "There was a server error" });
  }
};
