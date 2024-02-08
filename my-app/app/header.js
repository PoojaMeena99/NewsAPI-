const Header = () => {
    return (
        <>
            <div className='container-fluid '>
                <div className='row justify-content-center header'>
                    <div className='text-center heardertext'>
                        <span>NewsAPI</span>
                        <img className="logo" src="logo.png" />
                        <span>Org</span>
                    </div>
                </div>
                <div className="div"></div>
                <div className="div"></div>

                <div className="row d-flex justify-content-center align-items-center searchrow ">
                    {/* <div className="d-flex search"> */}
                        <div><img className="imag" src="search.png" />
                        <input type="text" class="form-control " placeholder="search..." /></div>
                        <div className="Gobtn d-flex justify-content-center align-items-center">Go</div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Header;