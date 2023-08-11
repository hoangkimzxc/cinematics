import moment from "moment";
import React, { useState } from "react";
import { checkCharsInString, truncateText } from "../../../../utils";
function MovieDetailGuestReviewsContent({ rev }) {
  const [toggleFullText, setToggleFullText] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="mb-2 text-2xl font-semibold">
        {rev.author_details.username}
      </div>
      <div className="mb-3 text-sm">
        <span>{moment(rev.updated_at).format("DD/MM/YYYY HH:mm")}</span>
        {rev?.author_details?.rating && (
          <span className="bg-black px-3 py-1 rounded-full ml-3 text-amber-500 hover:text-amber-400 hover:cursor-default">
            <i className="fa-solid fa-star mr-1"></i>{" "}
            {rev.author_details.rating}.0
          </span>
        )}
      </div>
      <div className="">
        {!toggleFullText && (
          <span>
            <span>{truncateText(rev.content, 400)}</span>
            {checkCharsInString(rev.content, 400) && (
              <span
                className="text-blue-500 font-semibold hover:cursor-pointer hover:text-blue-400 "
                onClick={() => setToggleFullText(true)}
              >
                See more...
              </span>
            )}
          </span>
        )}
        {toggleFullText && <span>{rev.content}</span>}
      </div>
    </div>
  );
}

export default React.memo(MovieDetailGuestReviewsContent);
