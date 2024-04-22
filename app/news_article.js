import React from "react";

function News_article({article}) {
  if (article !== null) {
    return (
      <div className="col-lg-4">
        <div className="article">
          <div>
            <img className="img" src={article.image} alt="" />
          </div>
          <div className="news_title">
          {article.title}
          </div>
          <span className="news_discription">
            {article.discription}
          </span>
          <br/>
          <div className="more_details">Read full article</div>
          <a href={article.url}> <img className="ero" src="/ero.jpg" /> </a>
        </div>
      </div>  
    );
  };
};
export default News_article;
