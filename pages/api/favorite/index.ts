import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function favorite(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return allMoviesFavorite(req, res);
    case "POST":
      return addMovieFavorite(req, res);

    case "DELETE":
      return deleteMovieFavorite(req, res);
    default:
      return res.status(400).json({ message: "Bad request" });
  }
}
const allMoviesFavorite = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { currentUser } = await serverAuth(req, res);

    const favoritedMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return res.status(200).json(favoritedMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "There was a server error" });
  }
};

const addMovieFavorite = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { currentUser } = await serverAuth(req, res);

    const { movieId = "" } = req.body;

    if (!movieId) {
      return res.status(400).json({ message: "id empty" });
    }

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      return res.status(400).json({ message: "invalid id" });
    }

    const user = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "There was a server error" });
  }
};

const deleteMovieFavorite = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { currentUser } = await serverAuth(req, res);

    const { movieId = "" } = req.query as { movieId: string };

    if (!movieId) {
      return res.status(400).json({ message: "id empty" });
    }

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      return res.status(400).json({ message: "invalid id" });
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

    const updatedUser = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "There was a server error" });
  }
};
