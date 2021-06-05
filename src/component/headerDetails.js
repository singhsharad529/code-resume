import React from 'react'
import "./headerDetails.css"
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
                        
                        <h3><FaPhoneAlt className="containerIcon" />+91-9871758065
                  </h3>
                  
                  <h3><FaLocationArrow className="containerIcon" />570,Jones St.clinton tower, NY
                  </h3>
 
                    </div>
                    <hr className="containerLine" />

                </div>

                <div className="side2Container">
                    <div className="common education">
                    <h3><FaGlobe className="containerIcon" />www.codebietjh.com
                  </h3>
                
                  <h3><FaEnvelope className="containerIcon" />singhsharad529@gmail.com
                  </h3>

                    </div>
                    <hr className="containerLine" />
                </div>
            </div>
        </div>

    )

}

export default MainDetails;