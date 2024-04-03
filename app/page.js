"use client";
import React, { useState } from "react";
import Header from "./header";
import Searchbar from "./searchbar";
import Grid from "./grid";
import Footer from "./footer";
import articles from "./article_data";

function page() {
  const [changeValue, setchangeValue] = useState(articles);
  const articleArray = [];

  const fetchData = function (input) {
    console.log("start fatchinggggg...");
    fetch(
      `https://newsapi.org/v2/everything?q=${input}&sortBy=publishedAt&pageSize=10&apiKey=87b8452aff0942a3abff56c30c065893`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "response");
        const articlesData = data.articles;

        let article;
        for (let item of articlesData) {
          article = item;
          console.log(article, "articlesData[item]");

          const articleObject = {
            image: article.urlToImage,
            title: article.title,
            description: article.description,
            url: article.url,
          };
          articleArray.push(articleObject);
        }

        console.log(articleArray, "***");
        setchangeValue(articleArray);
      });
  };

  return (
    <>
      <Header />
      <Searchbar fetchData={fetchData} />
      <Grid articles={changeValue} />
      <Footer />
    </>
  );
}

export default page;
