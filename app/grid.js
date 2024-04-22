import React from "react";
import News_row from "./news_row";

function Grid({ articles }) {
  // console.log(articles, "poojaa");
  return (
    <div className="container">
      <div className="row article_row">
      <News_article 
        article={article1} 
      />
      <News_article 
        article={article2}
      />
      <News_article 
        article={article3} 
      />
        <News_row
          article1={articles[0]}
          article2={articles[1]}
          article3={articles[2]}
        />
        <News_row
          article1={articles[3]}
          article2={articles[4]}
          article3={articles[5]}
        />
        <News_row
          article1={articles[6]}
          article2={articles[7]}
          article3={articles[8]}
        />
      </div>  
    </div>
  );
}
export default Grid;
