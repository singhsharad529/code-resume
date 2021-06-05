import React from 'react'
import "./Header.css"
import user_image from "../image/image.jpg";
import header_image from "../image/image2.jpg";
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div className="header">
    <div className=" l head_container ">
            <div className="head_cot">
              <div className="heroText">
              <h1>Michael johnson</h1>
                <p><span></span> Graphic and Web designer</p>
              </div>
              
                <img src={user_image} className="head_img"  />
                
            </div>
        </div>
    </div>
   )

 }

export default Header;