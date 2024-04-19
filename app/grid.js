import React from "react";
import Article_row from "./article_row";

function Grid({ articles }) {
  // console.log(articles, "poojaa");
  return (
    <div className="container">
     
      <Article_row
        article1={articles[0]}
        article2={articles[1]}
        article3={articles[2]}
      />
      <Article_row
        article1={articles[3]}
        article2={articles[4]}
        article3={articles[5]}
      />
      <Article_row
        article1={articles[6]}
        article2={articles[7]}
        article3={articles[8]}
      />
    </div>
  );
}
export default Grid;
