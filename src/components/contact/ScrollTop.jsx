import React from 'react'

const ScrollTop = () => {
  return (
    <div className='scroll_top' style={{position: "relative",
    bottom: "-30px",transform: "rotate(180deg)",left:"60px",border:"1px solid",maxWidth:"fit-content"}}>
      <a href="#home" className="mouse__wrapper">
        <a href="#home" className="go-top">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>
      </a>
    </div>
  )
}

export default ScrollTop;
