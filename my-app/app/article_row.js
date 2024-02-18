import React from "react";
import Article from "./article";

function Article_row() {
  return (
    <div className="row article_row">
      <div class="col-lg-4">
        <Article />
      </div>
      <div class="col-lg-4">
        <Article />
      </div>
      <div class="col-lg-4">
        <Article />
      </div>
    </div>
  );
}
export default Article_row;
