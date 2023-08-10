import React from "react";
import { randomRange } from "../../../../utils";
import ImageComponent from "../../../search/components/ImageComponent";

function MovieDetailCasts({ info }) {
  const imgLink = `https://picsum.photos/id/${randomRange(1, 200)}/1000/1000`;

  return (
    <div className=" hover:-translate-0.5 hover:scale-110 duration-100 transition-all delay-[30ms]">
      {info?.profile_path ? (
        <ImageComponent
          src={
            info?.profile_path &&
            `${"https://image.tmdb.org/t/p/original" + info.profile_path}`
          }
          className="h-[9rem] min-w-[7rem] rounded-md shadow-emerald-500/50 shadow-lg mb-2"
        />
      ) : (
        <img
          src={`${imgLink}`}
          className="h-[10.5rem] inline-block min-w-[7rem] rounded-md shadow-emerald-500/50 shadow-lg mb-2"
        />
      )}

      <div>{info.name}</div>
    </div>
  );
}

export default MovieDetailCasts;
