import React from "react";

function Footer() {
  return (
    <>
      <div className="row footer_border"></div>
      <div class="d-none d-lg-block lg_div">
        <span className="text_bold">NewsAPI</span>
        <div class="footer_icon news_api"></div>
        <span  className="text_bold">Org </span>
        <span className="text_para">is not responsible for the content of external sites</span>
      </div>

      <div class="d-block d-lg-none sm_div">
        <span  className="text_bold">NewsAPI</span>
        <div class=" using footer_icon news_api"></div>
        <span  className="text_bold">Org </span>
        <br></br>
        <span className="text_para">
          is not responsible for <br></br> the content of external<br></br>
          sites
        </span>
      </div>
    </>
  );
}

export default Footer;
