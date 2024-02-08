import React from 'react'

function Grid() {
  return (
    <>
        <div className='container'>
            <div className='row newsheading d-sm-none '>
                <span>TOP NEWS FROM INDIA</span>
            </div>
            <div className='row'>
                <div class="col-12 col-sm-4 gridcol"></div>
                <div class="col-12 col-sm-4 gridcol"></div>
                <div class="col-12 col-sm-4 gridcol"></div>
            </div>
            <div className='row'>
                <div class="col-12 col-sm-4 gridcol"></div>
                <div class="col-12 col-sm-4 gridcol"></div>
                <div class="col-12 col-sm-4 gridcol"></div>
            </div>
            <div className='row '>
                <div class="col-12 col-sm-4 gridcol"></div>
                <div class="col-12 col-sm-4 gridcol"></div>
                <div class="col-12 col-sm-4 gridcol"></div>
            </div>
        </div>
    </>
  )
}
export default Grid