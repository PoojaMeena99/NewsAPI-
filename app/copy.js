// "use client";
// import 'bootstrap/dist/css/bootstrap.css';
// import React, { useState, useEffect } from "react";
// import Image from 'next/image';


// const Page = () => {
//   const [News, setNews] = useState([]);
//   useEffect(() => {
//     const callApi = async () => {
//       const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-12-26&sortBy=publishedAt&apiKey=23f06d3c9f604b2fbd7833ab7b618cc7');
//       const data = await response.json();
//       console.log(data)
//       const NewsArray = data.articles || [];
//       setNews(NewsArray)
//     }

//     callApi();
//   }, []);

//   return (
//       <div className="container-fluid">
//         <div className="header">
//           <div className='headertext'>NewsAPI</div>
//           <div className="logo"></div>
//           <div className='headertext'>Org</div>
//         </div>
//         <hr></hr>
//         <hr></hr>
//         <div className="search-container">
//           <form action="/action_page.php">
//             <input type="text" placeholder="Search.." name="search"></input>
//             <button type="submit"><i className="fa fa-search"></i></button>
//           </form>
//         </div>
//         <div className='body'>
//           <div className="row" >
//             {Array.isArray(News) > 0 &&
//               News.map((updatenews, index) => (
//                 <div className="sm-col-4 row"
//                    key={updatenews.source}>
//                    {/* id={`${updatenews.source.id}`} */}
//                    <h1> {`${index}`}</h1>
//                    <h1 className='newsheadline'>{`${updatenews.source.name}`}</h1>
//                    {/* name={updatenews.name}> */}
//                    <h5 className='newstittle'>{updatenews.title}</h5>
//                    <p className='newsdescription'>{updatenews.description}</p>
//                    <p className='newsimg'>{updatenews.image}</p>
//                    {updatenews.urlToImage && (
//                      <Image className='newsimg'
//                        loader={({ src }) => src}
//                        src={updatenews.urlToImage}
//                        alt={updatenews.description}
//                        url={updatenews.url}
//                        width={500}
//                        height={300}
//                      />
//                    )}
//                 </div>
            
//               ))}
//              </div>  
//         </div>
//       </div>
//   )
// }

// export default Page;



















let article1_image = articles[0].image;
  // let article1_title = articles[0].title;
  // let article1_discription = articles[0].discription;
  // let article1_url = articles[0].url;
  // console.log(article1_image, "pooja");

  // var article2 = articles[1].image;
  // article2 = articles[1].title;
  // article2 = articles[1].discription;
  // article2 = articles[1].url;

  // var article3 = articles[2].image;
  // article3 = articles[2].title;
  // article3 = articles[2].discription;
  // article3 = articles[2].url;

  // var article4 = articles[3].image;
  // article4 = articles[3].title;
  // article4 = articles[3].discription;
  // article4 = articles[3].url;

  // var article5 = articles[4].image;
  // article5 = articles[4].title;
  // article5 = articles[4].discription;
  // article5 = articles[4].url;

  // var article6 = articles[5].image;
  // article6 = articles[5].title;
  // article6 = articles[5].discription;
  // article6 = articles[5].url;

  // var article7 = articles[6].image;
  // article7 = articles[6].title;
  // article7 = articles[6].discription;
  // article7 = articles[6].url;

  // var article8 = articles[7].image;
  // article8 = articles[7].title;
  // article8 = articles[7].discription;
  // article8 = articles[7].url;

  // var article9 = articles[8].image;
  // article9 = articles[8].title;
  // article9 = articles[8].discription;
  // article9 = articles[8].url;
























  import React from "react";

function News_article({ articles }) {
  console.log(articles, "articles**for**articles")
  if (articles !== null) 

    return (
      <>
        {articles.map(function (displayarticle) {
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
