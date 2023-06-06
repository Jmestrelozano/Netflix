import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const opts = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};
export const useMovies = () => {
  const { data, error, isLoading } = useSwr("/api/movie", fetcher, opts);
  return {
    data,
    error,
    isLoading,
  };
};

export const useMovie = (id?: string) => {
  const { data, error, isLoading } = useSwr(
    id ? `/api/movie/${id}` : null,
    fetcher,
    opts
  );
  return {
    data,
    error,
    isLoading,
  };
};
