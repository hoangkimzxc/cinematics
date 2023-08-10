import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosTMDB from "../../../../api/axiosTMDB";
import "../../../../components/Common/HideScroll/HideScroll.css";
import ImageComponent from "../../../search/components/ImageComponent";
import LoadingModal from "../../../../components/Common/LoadingModal/LoadingModal";

function MoviesRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosTMDB.get(`${fetchUrl}&page=${page}`);
        setMovies((prevMovies) => [...prevMovies, ...response?.results]);
        setTotalPage(response?.total_pages);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  const handleLoadMore = () => {
    setPage((page) => page + 1);
    setLoading(true);
  };

  return (
    <div className="pb-6 ">
      {loading ? (
        ""
      ) : (
        <div className="text-white text-xl font-bold px-4">{title}</div>
      )}
      <div className="hide-scroll px-7 sm:px-4 py-6 flex flex-wrap gap-6">
        {movies &&
          movies?.map((movie, index) => (
            <Link
              to={`/movie/${movie?.id}`}
              className="hover:cursor-pointer hover:-translate-0.5
          hover:scale-110 duration-100 transition-all delay-[30ms] 
          2xl:w-[15.2%] xl:w-[18.3%] lg:w-[23%] md:w-[30.8%] sm:w-[47%] w-full"
              key={movie?.id}
            >
              <ImageComponent
                src={
                  (movie &&
                    ((movie?.backdrop_path &&
                      `${
                        "https://image.tmdb.org/t/p/original" +
                        movie.backdrop_path
                      }`) ||
                      (movie?.poster_path &&
                        `${
                          "https://image.tmdb.org/t/p/original" +
                          movie.poster_path
                        }`))) ||
                  "https://picsum.photos/1900"
                }
                alt={`${
                  movie?.original_title ||
                  movie?.title ||
                  movie?.original_name ||
                  "Name"
                }`}
                className="w-full h-[16rem] sm:h-[11rem] md:h-[9rem] shadow-rose-500/50 rounded-lg
                shadow-lg object-fill"
              />

              <div className="text-white mt-1">
                {`${
                  movie?.original_title ||
                  movie?.title ||
                  movie?.original_name ||
                  "Name"
                }`}
              </div>
            </Link>
          ))}
        {!loading && page < totalPage ? (
          <button
            className="text-amber-200 ml-3 h-[3rem] px-5 font-semibold my-auto 
          rounded-3xl border-4 border-amber-500 shadow-amber-500/50 shadow-lg
          hover:-translate-0.5
          hover:scale-110 duration-100 transition-all delay-[30ms]"
            onClick={handleLoadMore}
          >
            More...
          </button>
        ) : (
          ""
        )}
      </div>
      {loading ? <LoadingModal /> : ""}
    </div>
  );
}

export default MoviesRow;
