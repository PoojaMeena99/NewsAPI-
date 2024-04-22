import React from "react";
import News_article from "./news_article";

function News_row({ article1, article2, article3 }) {

  return (
    <>
      <News_article 
        article={article1} 
      />
      <News_article 
        article={article2}
      />
      <News_article 
        article={article3} 
      />
    </>
  );
}
export default News_row;
