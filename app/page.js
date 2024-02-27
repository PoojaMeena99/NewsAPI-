import React from "react";
import Header from "./header";
import Grid from "./grid";
import Footer from "./footer";
import articles from "./article_data";

function page() {
  return (
    <>
      <Header />
      <Grid
        articles={articles}
      />
      <Footer />
    </>
  );
}

export default page;
