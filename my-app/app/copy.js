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