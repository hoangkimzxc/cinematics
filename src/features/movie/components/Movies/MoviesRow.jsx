import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosTMDB from "../../../../api/axiosTMDB";
import "../../../../components/Common/HideScroll/HideScroll.css";
import ImageComponent from "../../../search/components/ImageComponent";
import LoadingModal from "../../../../components/Common/LoadingModal/LoadingModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper/core"; // Import Swiper core and required modules

import "../../../../App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination]);

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

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
    },

    // Add more breakpoints as needed
  };

  return (
    <div className="">
      {movies && (
        <div className="text-white text-xl font-bold px-4">{title}</div>
      )}
      <div className="flex overflow-y-hidden overflow-x-hidden">
        <Swiper
          breakpoints={breakpoints}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="h-full p-4 w-full"
          onSlideChange={(swiper) => {
            if (swiper.isEnd) {
              handleLoadMore();
            }
          }}
        >
          {movies &&
            movies?.map((movie, index) => (
              <SwiperSlide
                className="hover:cursor-pointer hover:-translate-0.5
              hover:scale-110 duration-100 transition-all delay-[30ms] 
             h-full"
                key={movie?.id}
              >
                <Link to={`/movie/${movie?.id}`}>
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
                    className="w-full sm:h-[11rem] md:h-[9rem] shadow-rose-500/50 rounded-lg
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
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {loading && <LoadingModal />}
    </div>
  );
}

export default MoviesRow;
