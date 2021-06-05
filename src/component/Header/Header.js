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
                <h1>Michael johnson</h1>
                <p>Graphic and Web designer</p>
                <img src={user_image} className="head_img" style={{width:200 ,height:200}}/>
                
            </div>
        </div>
    </div>
   )

 }

export default Header;