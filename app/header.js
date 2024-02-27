const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="text-center hearder_text">
            <span>NewsAPI</span>
            <img className="header_icon" src="logo.png" />
            <span>Org</span>
          </div>
        </div>
        <div className="border_div"></div>
        <div className="border_div"></div>

        <div className="row justify-content-center search_row">
          <div className="search_box">
            <img className="imag" src="search.png" />
            <input className="input_box" type="text" placeholder="Search.." />
          </div>
          <button className="go_btn">GO</button>
        </div>
      </div>
    </>
  );
};

export default Header;
