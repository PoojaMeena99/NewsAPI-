import React from "react";

function News_article({ article }) {
  console.log(article, "article**for**article")
  if (article && article.length !== 0) {
    return (
      <>
        <div className="col-lg-4">
          <div className="article">
            <div>
              <img className="img" src={article.image} alt="" />
            </div>
            <div className="news_title">
              {article.title}
            </div>
            <span className="news_discription">
              {article.description}
            </span>
            <br />
            <div className="more_details">Read full article</div>
            <a href={article.url}> <img className="ero" src="/ero.jpg" /> </a>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
export default News_article;
