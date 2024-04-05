"use client";
import React, { useState  } from "react";

function Searchbar({create_articles}) {
  const [input, setInput] = useState("");
  console.log(input);

  const fetchData = function (input) {
    console.log("start fatchinggggg...");
    fetch(
      `https://newsapi.org/v2/everything?q=${input}&sortBy=publishedAt&pageSize=9&apiKey=87b8452aff0942a3abff56c30c065893`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "response");
        create_articles(data.articles);
      });
  };

  return (
    <div className="row justify-content-center search_row">
      <div className="search_box">
        <img className="imag" src="search.png" />
        <input
          className="input_box"
          placeholder="search..."
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button className="go_btn" onClick={()=>fetchData(input)}>
        Go
      </button>
    </div>
  );
}

export default Searchbar;
