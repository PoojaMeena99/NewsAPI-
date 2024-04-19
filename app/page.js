"use client";
import React, { useState, useEffect } from "react";
import Header from "./header";
import Searchbar from "./searchbar";
import Grid from "./grid";
import Footer from "./footer";
// import initial_articles from "./article_data";

function page() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    function fatch_heading() {
      console.log("headline fatchinggggg...");
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=87b8452aff0942a3abff56c30c065893`
      )
        .then((response) => response.json())
        .then((data) => {
          create_articles(data.articles);
          console.log(data.articles, "data")
        });
    };
    fatch_heading()
  }, []);

  function create_articles(headline_data) {
    console.log(headline_data, "headlinee")
    let new_articles = headline_data.map((search_article) => ({
      image: search_article.urlToImage,
      title: search_article.title,
      discription: search_article.description,
      url: search_article.url,
    })
    )
    const result = new_articles.filter((check) => {
      return (
        check.image !== null &&
        check.title !== null &&
        check.discription !== null &&
        check.url !== null
      );
    });
    console.log(result, "articlessss")
    setArticles(result)
  }



  if (articles.length === 0) {
    return null;
}
  return (
    
    <>
      <Header />
      <Searchbar create_articles={create_articles} />
      <Grid articles={articles} />
      <Footer />
    </>
  );
}

export default page;
