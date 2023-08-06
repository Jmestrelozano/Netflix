import { getSession, signOut } from "next-auth/react";

import { Navbar } from "@/components/navbar/Navbar";
import { Billboard } from "@/components/header/Billboard";
import { MovieList } from "@/components/movies/MovieList";
import { useMovies } from "@/hooks/useMovie";
import { useFavorites } from "@/hooks/useFavorite";
import { InfoModal } from "@/components/modal/InfoModal";
import useStore, { IStoreInterface } from "@/store/store";
import { GetServerSideProps } from "next";
import { Layout } from "@/components/layouts/Layout";

export default function HomePage() {
  const { data: movies = [], isLoading } = useMovies();
  const { data: favorites = [] } = useFavorites();

  const { isOpen, closeModal } = useStore((store: IStoreInterface) => store);
  return (
    <Layout title={"Pagina de inicio - Netflix"}>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList key={'trending'} title="Trending Now" data={movies} loader={isLoading} />
        <MovieList key={'favorites'} title="My List" data={favorites} loader={isLoading} />
      </div>
    </Layout>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const session = await getSession({ req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };