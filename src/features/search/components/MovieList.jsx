import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../searchSlice";
import { Link } from "react-router-dom";
import { truncateText } from "../../../utils/truncateText";
import LoadingModal from "../../../components/Common/LoadingModal/LoadingModal";
import { randomRange } from "../../../utils";
import MovieInMovieList from "./MovieInMovieList";

function MovieList({}) {
  const { data, loading } = useSelector((state) => state.search);

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    setMovies(data?.results);
  }, [data]);

  if (loading) return <LoadingModal />;

  return (
    <div className="pb-6 ">
      <div className="hide-scroll px-7 sm:px-4 py-6 flex flex-wrap gap-6">
        {movies &&
          movies?.map((movie) => (
            <MovieInMovieList key={movie.id} movie={movie} />
          ))}
        {/* {!loading && page < totalPage ? (
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
        )} */}
      </div>
    </div>
  );
}

export default MovieList;
