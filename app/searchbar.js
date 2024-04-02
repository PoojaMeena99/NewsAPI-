"use client";
import React, { useState  } from "react";

function Searchbar({fetchData}) {
  const [input, setInput] = useState("");
  console.log(input,)

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
