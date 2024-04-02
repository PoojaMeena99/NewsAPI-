"use client";
import Header from "./header";
import Searchbar from "./searchbar";
import Grid from "./grid";
import Footer from "./footer";
import articles from "./article_data";

function page() {
  
  const fetchData = function(input) {
    console.log("start fatchinggggg...");
    fetch(
      `https://newsapi.org/v2/everything?q=${input}&sortBy=publishedAt&apiKey=87b8452aff0942a3abff56c30c065893`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "response");
        const articlesData = data.articles;

        const articleArray = [];

        for (let i = 0; i < articlesData.length; i++) {
          const article = articlesData[i];
          console.log(article, "article[i]");

          const articleObject = {
            title: article.title,
            description: article.description,
            image: article.urlToImage,
            url: article.url,
          };

          articleArray.push(articleObject);
        }
      });
  }
  return (
    <>
      <Header />
      <Searchbar fetchData = {fetchData} />
      <Grid articles={articles} />
      <Footer />
    </>
  );
}

export default page;


