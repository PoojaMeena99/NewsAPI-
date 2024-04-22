import React from "react";

function News_article({ article }) {
  console.log(article, "articles**for**articles")
  if (article !== null)
    return (
      <>
        {article.map(function (displayarticle) {
          displayarticle.article;
          console.log(displayarticle, "article[i]");
          return (
            <div className="col-lg-4">
              <div className="article">
                <div>
                  <img className="img" src={displayarticle.image} alt="" />
                </div>
                <div className="news_title">
                  {displayarticle.title}
                </div>
                <span className="news_discription">
                  {displayarticle.description}
                </span>
                <br />
                <div className="more_details">Read full article</div>
                <a href={displayarticle.url}> <img className="ero" src="/ero.jpg" /> </a>
              </div>
            </div>
          )
        })
        }
      </>
    )
};

export default News_article;
