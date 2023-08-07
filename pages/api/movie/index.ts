import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function movie(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return allMovies(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}
const allMovies = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=31536000, stale-while-revalidate=86400"
  );

  try {
    await serverAuth(req, res);

    const movies = await prismadb.movie.findMany();

    return res.status(200).json(movies);
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ message: "There was a server error" });
  }
};
