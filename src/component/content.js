import React from 'react'
import "./content.css"
import{FaUser ,FaChartBar, FaTrophy, FaGraduationCap, FaUniversity, FaTools, FaStar, FaCamera, FaMusic, FaGamepad, FaTheaterMasks, FaBook, FaPlane} from 'react-icons/fa';
/**
* @author Shivangi singh
* @function 
**/

const Content = (props) => {
  return(
    <div className="ll">
        <div className=" l container ">
            
             <div className="side1">
             <div className="common">
                <h1><FaUser className="icon"/>
                 About me</h1><hr/>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum congue nulla, eget eleifend metus ullamcorper ultricies. Etiam convallis, nunc quis varius interdum, justo metus bibendum leo, nec eleifend odio dolor viverra dolor. Maecenas id feugiat nulla. Donec malesuada dui cursus turpis laoreet, et mattis enim rhoncus.</p>
             </div>
             {/* skills */}
             <div className="common Skills">
                <h1><FaChartBar className="icon"/>
                 Skills</h1><hr/>
                 
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum congue nulla, eget eleifend metus ullamcorper ultricies. Etiam convallis, nunc quis varius interdum, justo metus bibendum leo, nec eleifend odio dolor viverra dolor. Maecenas id feugiat nulla. Donec malesuada dui cursus turpis laoreet, et mattis enim rhoncus.</p>
             </div>
    {/* Awards */}
             <div className="common awards">
               <h1> <FaTrophy className="icon trophy"/>
                 awards</h1><hr/>
                 <h3>Web developers of year</h3>
                 <p>Lorem ipsum dolor sit amet,</p>
                 <h3>Web developers of year</h3>
                 <p>Lorem ipsum dolor sit amet,</p>
             </div>
             </div>
             {/* side 1 ends here */}


             <div className="side2">
    {/* Education */}
             <div className="common education"><h1><FaUniversity className="icon"/>
                 Education</h1><hr/>
    {/* timeline */}

 

    {/* end */}
                    </div>
            

     {/*experience  */}
             <div className="common experience"><h1><FaTools className="icon"/>
                 experience</h1><hr/>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum congue nulla, eget eleifend metus ullamcorper ultricies. Etiam convallis, nunc quis varius interdum, justo metus bibendum leo, nec eleifend odio dolor viverra dolor. Maecenas id feugiat nulla. Donec malesuada dui cursus turpis laoreet, et mattis enim rhoncus.</p>
             </div>
    {/* Hobbies */}
             <div className="common hobbies"><h1><FaStar className="icon"/>
                 hobbies & interest</h1><hr/>
                 <div className="hobbies_icon">
                    <div className="i"> <FaCamera/>
                    <span className="icon_name">Camera</span>
                    </div>
                    <div className="i"><FaMusic/><span className="icon_name">Camera</span></div>
                    <div className="i">  <FaGamepad/><span className="icon_name">Videogame</span></div>
                    <div className="i"><FaTheaterMasks/><span className="icon_name">Theater</span></div>
                    <div className="i"><FaBook/><span className="icon_name">Books</span></div>
                    <div className="i"><FaPlane/><span className="icon_name">Travel</span></div>
                 </div>
             </div>

             </div>
            </div>
        </div>
    
   )

 }

export default Content;