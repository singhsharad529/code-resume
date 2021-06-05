import React from 'react'
import "./headerDetails.css"
import user_image from "./image/image.jpg";
import { FaUser,FaPhoneAlt, FaChartBar,FaLocationArrow,FaGlobe,FaEnvelope, FaTrophy, FaGraduationCap, FaUniversity, FaTools, FaStar, FaCamera, FaMusic, FaGamepad, FaTheaterMasks, FaBook, FaPlane } from 'react-icons/fa';
/**
* @author Shivangi singh
* @function 
**/



const MainDetails = (props) => {
    return (
        <div className="outerContainer">
            <div className=" inner firstContainer ">

                <div className="side1Container">
                    <div className="common">
                        <div>
                        <img src={user_image} className="head_image" width="140px" height="150px" />
                        </div>
                        
 
                    </div>
                    
                </div>
                

                <div className="side2Container">
                    <div className="common ">
                        <div className="containerInside2">
                        <div className="startName">
                        <p className="name">HENNA BEKAR</p>
                        <p className="designation">Graphic Designer</p>

                        </div>
                        
                        <div className="mainDetails">
                        <p  ><FaPhoneAlt className="containerIcon" />+91-9878564589
                  </p>
                
                  <p><FaLocationArrow className="containerIcon" />570, Sector-31 Noida
                  </p>
                  <p><FaGlobe className="containerIcon" />www.codebietjh.com
                  </p>
                  <p><FaEnvelope className="containerIcon" />singhsharad529@gmail.com
                  </p>


                        </div>

                        </div>
                       
                   

                    </div>
                    
                </div>
            </div>
        </div>

    )

}

export default MainDetails;