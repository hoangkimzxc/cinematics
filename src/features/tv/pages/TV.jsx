import React from "react";
import { requests } from "../../../utils/constants";
import TVRow from "../components/TVRow";
import TVBanner from "../components/TVBanner";

function Movies() {
  //muon render dong thoi song song thi call o day roi nhet vao 1 mang chung roi pass prop

  return (
    <div>
      <TVBanner />
      <div className="pt-8 mx-8">
        <TVRow title="News" fetchUrl={requests.fetchNewsTV} />
        <TVRow title="Family" fetchUrl={requests.fetchFamilyTV} />
        <TVRow title="Kids" fetchUrl={requests.fetchKidsTV} />
        <TVRow title="Mystery" fetchUrl={requests.fetchMysteryTV} />
        <TVRow title="Reality" fetchUrl={requests.fetchRealityTV} />
        <TVRow title="Talk" fetchUrl={requests.fetchTalkTV} />
      </div>
    </div>
  );
}

export default Movies;
