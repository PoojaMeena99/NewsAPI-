"use client";
import React, { useState, useEffect } from "react";
import Header from "./header";
import Searchbar from "./searchbar";
import Grid from "./grid";
import Footer from "./footer";
// import initial_articles from "./article_data";

function page() {
  const [articles, setArticles] = useState([]);

  useEffect(function () {
    console.log("headline fatchinggggg...");
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=87b8452aff0942a3abff56c30c065893`
    )
      .then((response) => response.json())
      .then((data) => {
        create_articles(data.articles);
        console.log(data.articles, "data")
      });
  }, []);

  function create_articles(fetched_articles) {
    console.log(fetched_articles, "headlinee")

    let new_articles = fetched_articles.map(function (fetched_article) {
      let new_article = {
        image: fetched_article.urlToImage,
        title: fetched_article.title,
        description: fetched_article.description,
        url: fetched_article.url,
      };
      return new_article;
    });
    console.log(new_articles, "new_articles***")

    const filtered_articles = new_articles.filter(function (new_article) {
      if (
        new_article.image !== null &&
        new_article.title !== null &&
        new_article.description !== null &&
        new_article.url !== null
      ) {
        return true;
      }
    });

    console.log(filtered_articles, "filtered_articles");
    setArticles(filtered_articles);
  }

  if (articles.length !== 0) {
    return (
      <>
        <Header />
        <Searchbar create_articles={create_articles} />
        <Grid articles={articles} />
        <Footer />
      </>
    );
  };
};

export default page;
