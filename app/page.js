"use client";
import React, { useState } from "react";
import Header from "./header";
import Searchbar from "./searchbar";
import Grid from "./grid";
import Footer from "./footer";
import initial_articles from "./article_data";

function page() {
  const [articles, setArticles] = useState(initial_articles);

  const create_articles = function (search_articles) {
    const new_articles = [];

    search_articles.forEach((search_article) => {
      const new_article = {
        image: search_article.urlToImage,
        title: search_article.title,
        discription: search_article.description,
        url: search_article.url,
      };

      new_articles.push(new_article);
    });
    console.log(new_articles,"new_arrr");
    setArticles(new_articles);
  };

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
