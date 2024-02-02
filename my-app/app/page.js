"use client";
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
// import React, { useState, useEffect } from "react";
import Image from "react"



export default function page() {

  return (
    <div className="container-fluid">
      <div className="header">
        <div className='headertext'>NewsAPI</div>
        <div className="logo"></div>
        <div className='headertext'>Org</div>
      </div>
      <hr class="hr"></hr>
      <hr></hr>
      <div className="searchbar" go>
        <div>
          <div className="Gobtn">Go
          </div>
        </div>
      </div>


      <div class="div">
        <div class="row col-md-d-none">
          <div id="box" class="col-12 col-sm-6">
            Box 1
          </div>
          <div id="box" class="col-12 col-sm-6">
            Box 2
          </div>
          <div id="box" class="col-12 col-sm-6">
            Box 3
          </div>
          <div id="box" class="col-12 col-sm-6">
            Box 1
          </div>
          <div id="box" class="col-12 col-sm-6">
            Box 2
          </div>
          <div id="box" class="col-12 col-sm-6">
            Box 3
          </div>
        </div>
      </div>
    </div>
  )
}