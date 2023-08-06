import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function movieRamdon(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return ramdonMovie(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}
const ramdonMovie = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await serverAuth(req, res);

    const moviesCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * moviesCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "There was a server error" });
  }
};
