import React from "react";
import News_article from "./news_article";

function Grid({ articles }) {
  console.log(articles, "grid***articles")
  return (
    <div className="container">
      <div className="row article_row">
        {articles.map(function (displayarticle) {
          console.log(displayarticle, "article[i]");
          let article = {
            image: displayarticle.image,
            title: displayarticle.title,
            description: displayarticle.description,
            url: displayarticle.url,
          };
          return (
            <News_article
              article={article}
            />
          )
        })}
      </div>
    </div>
  );
}
export default Grid;
