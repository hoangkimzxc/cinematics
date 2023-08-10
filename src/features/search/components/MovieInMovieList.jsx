import React from "react";
import { Link } from "react-router-dom";
import { randomRange, truncateText } from "../../../utils";

function MovieInMovieList({ movie }) {
  const imgLink = `https://picsum.photos/id/${randomRange(1, 200)}/1000/1000`;

  return (
    <Link
      to={`/movie/${movie?.id}`}
      className="hover:cursor-pointer hover:-translate-0.5
hover:scale-110 duration-100 transition-all delay-[30ms] 
2xl:w-[15.2%] xl:w-[18.3%] lg:w-[23%] md:w-[30.8%] sm:w-[47%] w-full"
    >
      <img
        src={
          (movie &&
            ((movie?.backdrop_path &&
              `${
                "https://image.tmdb.org/t/p/original" + movie.backdrop_path
              }`) ||
              (movie?.poster_path &&
                `${
                  "https://image.tmdb.org/t/p/original" + movie.poster_path
                }`))) ||
          `${imgLink}`
        }
        alt={`${
          movie?.original_title ||
          movie?.title ||
          movie?.original_name ||
          "Name"
        }`}
        className="w-full h-[16rem] sm:h-[11rem] md:h-[9rem] rounded-lg 
shadow-lg shadow-rose-500/50 object-fill"
      />

      <div className="text-white mt-1">
        {truncateText(
          `${
            movie?.original_title ||
            movie?.title ||
            movie?.original_name ||
            "Name"
          }
`,
          30
        )}
      </div>
    </Link>
  );
}

export default MovieInMovieList;
