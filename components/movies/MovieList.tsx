import React from "react";

import { isEmpty } from "lodash";
import { Movie } from "@/interfaces";
import { MovieCard } from "../card/MovieCard";

interface MovieListProps {
  data: Movie[];
  title: string;
  loader: boolean
}

export const MovieList: React.FC<MovieListProps> = ({ data, title, loader }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => {
            return (
              <>
                {
                  loader ? <div className="group bg-zinc-900 col-span relative h-[12vw]">
                    <div
                      className="
                      animate-pulse
                      bg-zinc-800
                      cursor-pointer
                      object-cover
                      transition
                      duration
                      shadow-xl
                      rounded-md
                      group-hover:opacity-50
                      sm:group-hover:opacity-50
                      delay-300
                      w-full
                      h-[12vw]
                    "
                    />
                  </div> : <MovieCard key={movie.id} data={movie} />
                }
              </>
            )
          })}
        </div>
      </div>
    </div>
  );
};
