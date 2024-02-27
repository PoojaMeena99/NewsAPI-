import React from "react";
import Article from "./article";

function Article_row({ article1, article2, article3 }) {
  // console.log(article1, "a");
  // console.log(article2, "b");
  // console.log(article3, "c");
  return (
    <div className="row article_row">
      <div className="col-lg-4">
        <Article 
          article={article1} 
        />
      </div>
      <div className="col-lg-4">
        <Article 
          article={article2}
        />
      </div>
      <div className="col-lg-4">
        <Article 
          article={article3} 
        />
      </div>
    </div>
  );
}
export default Article_row;
