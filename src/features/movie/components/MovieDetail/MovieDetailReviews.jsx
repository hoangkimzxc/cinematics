import React from "react";
import { sortedTimestamps } from "../../../../utils";
import MovieDetailYourReview from "./MovieDetailYourReview";
import MovieDetailGuestReviews from "./MovieDetailGuestReviews";

function MovieDetailReviews({ reviewList }) {
  return (
    <div
      className="w-full px-[2rem] md:px-[4rem] xl:px-[6.5rem] 2xl:px-[13rem]
  my-[2rem] lg:my-[5rem] duration-100 transition-all delay-[30ms]"
    >
      <div className="text-2xl inline-block font-bold mb-4 border-b-4 border-b-rose-600 pb-1">
        Reviews ({reviewList.length})
      </div>

      <div className="post-cmt-container pb-5 border-b-2 border-b-slate-700 mb-12">
        {/* Your Review */}
        <MovieDetailYourReview />
      </div>

      {/* Guest reviews */}
      {reviewList.length > 0 ? (
        sortedTimestamps(reviewList).map((rev) => (
          <MovieDetailGuestReviews key={rev.id} rev={rev} />
        ))
      ) : (
        <div
          className="text-white text-center text-[2rem] mb-[1.5rem] bg-[#222] py-5 px-7 rounded-lg 
      border-b-2 border-b-lime-500 shadow-lime-500/50 shadow-md"
        >
          Be the first to review...
        </div>
      )}
    </div>
  );
}

export default MovieDetailReviews;
