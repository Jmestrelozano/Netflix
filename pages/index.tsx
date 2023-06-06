import { signOut } from "next-auth/react";

import { Navbar } from "@/components/navbar/Navbar";
import { Billboard } from "@/components/header/Billboard";
import { MovieList } from "@/components/movies/MovieList";
import { useMovies } from "@/hooks/useMovie";
import { useFavorites } from "@/hooks/useFavorite";
import { InfoModal } from "@/components/modal/InfoModal";
import useStore, { IStoreInterface } from "@/store/store";

export default function HomePage() {
  const { data: movies = [] } = useMovies();
  const { data: favorites = [] } = useFavorites();

  const { isOpen, closeModal } = useStore((store: IStoreInterface) => store);
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
}
