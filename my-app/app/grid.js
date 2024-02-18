import React from "react";
import Article_row from "./article_row";

function Grid() {
  return (
    <div className="container">
      <div className="row news_heading ">
        <span>TOP NEWS FROM INDIA</span>
      </div>
      <Article_row />
      <Article_row />
      <Article_row />
    </div>
  );
}
export default Grid;
