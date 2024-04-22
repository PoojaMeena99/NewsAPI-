import React from "react";
import News_article from "./news_article";

function Grid({ articles }) {
  console.log(articles, "poojaa");
  console.log(articles, "grid***articles")
  return (
    <div className="container">
      <div className="row article_row">
        <News_article
          article={articles}
        />
      </div>
    </div>
  );
}
export default Grid;
