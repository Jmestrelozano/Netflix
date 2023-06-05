import useSwr from "swr";

import fetcher from "@/lib/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr(
    "/api/user/currentUser",
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
