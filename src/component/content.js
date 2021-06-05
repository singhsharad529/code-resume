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
               <div className="mainHeading">
               <h1><FaUser className="icon"/>
                 About me</h1>
               </div>
               <hr/>
               
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum congue nulla, eget eleifend metus ullamcorper ultricies. Etiam convallis, nunc quis varius interdum, justo metus bibendum leo, nec eleifend odio dolor viverra dolor. Maecenas id feugiat nulla. Donec malesuada dui cursus turpis laoreet, et mattis enim rhoncus.</p>
             </div>
             {/* education */}
             

             <div className="common education">
             <div className="mainHeading">
             <h1><FaUniversity className="icon"/>
                 Education</h1>

</div><hr/>
    {/* timeline */}
 
<div className="vtl">
  <div className="event">
    <h4><span style={{float:'left'}}>University of chicago</span> <span className="year" style={{float:'right'}}>2007-2008</span></h4><br />
    <div className="post">
      <h5 >Master of design</h5>
    </div>
    <p className="etxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nihil architecto adipisci quibusdam, In nihil architecto adipisci quibusdam  </p>
  </div>
  <div className="event">
    <h4><span style={{float:'left'}}>University of chicago</span> <span className="year" style={{float:'right'}}>2007-2008</span></h4><br />
    <div className="post">
      <h5 >Master of design</h5>
    </div>
    <p className="etxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nihil architecto adipisci quibusdam, In nihil architecto adipisci quibusdam  </p>
  </div>
  <div className="event">
    <h4><span style={{float:'left'}}>University of chicago</span> <span className="year" style={{float:'right'}}>2007-2008</span></h4><br />
    <div className="post">
      <h5 >Master of design</h5>
    </div>
    <p className="etxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nihil architecto adipisci quibusdam, In nihil architecto adipisci quibusdam  </p>
  </div>
  
</div>

 

    {/* end */}
                    </div>
                    {/* Hobbies */}
             <div className="common hobbies">
             <div className="mainHeading">
             <h1><FaStar className="icon"/>
                 hobbies & interest</h1>
               </div>
              
              <hr/>
                  
                 <ul className="hobbiesList">
                <li>
                <h3>Singing</h3>
 
                </li>
                <li>
                <h3>Dancing</h3>
                </li>
                <li>
                <h3>Coding</h3>
                </li>
              </ul>
                  
             </div>
            
   
             </div>
             {/* side 1 ends here */}


             <div className="side2">
    {/* skills */}
    <div className="common Skills">
               <div className="mainHeading ">
               <h1><FaChartBar className="icon"/>
                 Skills</h1>
               </div>
      
               <hr/>
                
               <div className="tab_h">
                <span className="round-tab_h">Designing</span>
                <span className="round-tab_h">Web development</span>
                <span className="round-tab_h">Coding</span> 
                <span className="round-tab_h">Designing</span>
                <span className="round-tab_h">Web development</span>
                <span className="round-tab_h">Coding</span> 
                <span className="round-tab_h">Designing</span>
                <span className="round-tab_h">Web development</span>
                <span className="round-tab_h">Coding</span> 
    </div>
              
                 
                 
             </div>

            

     {/*experience  */}
             <div className="common experience">
             <div className="mainHeading">
             <h1><FaTools className="icon"/>
                 experience</h1>
            </div>
              <hr/>
                  {/* timeline */}
 
<div className="vtl">
  <div className="event">
    <h4><span style={{float:'left'}}>Web Development Ltd.</span> <span className="year" style={{float:'right'}}>2007-2008</span></h4><br />
    <div className="post">
      <h5 >Chief Designer</h5>
    </div>
    <p className="etxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nihil architecto adipisci quibusdam, In nihil architecto adipisci quibusdam  </p>
  </div>
  <div className="event">
    <h4><span style={{float:'left'}}>Web Development Ltd.</span> <span className="year" style={{float:'right'}}>2007-2008</span></h4><br />
    <div className="post">
      <h5 >Chief Designer</h5>
    </div>
    <p className="etxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nihil architecto adipisci quibusdam, In nihil architecto adipisci quibusdam  </p>
  </div>
  <div className="event">
    <h4><span style={{float:'left'}}>Web Development Ltd.</span> <span className="year" style={{float:'right'}}>2007-2008</span></h4><br />
    <div className="post">
      <h5 >Chief Designer</h5>
    </div>
    <p className="etxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nihil architecto adipisci quibusdam, In nihil architecto adipisci quibusdam  </p>
  </div>
  
</div>
             </div>


              {/* Awards */}
              <div className="common awards">
             <div className="mainHeading">
             <h1> <FaTrophy className="icon trophy"/>
                 awards</h1>
            </div>
         
              <hr/>

              <ul className="rewardList">
                <li>
                <h3>WEB DEVELOPERS OF THIS YEAR</h3>
                 <p>Abc Creative Studio / 2018</p>

                </li>
                <li>
                <h3>WEB DEVELOPERS OF THIS YEAR</h3>
                 <p>Abc Creative Studio / 2018</p>

                </li>
              </ul>
              
             
             </div>
    

             </div>
            </div>
        </div>
    
   )

 }

export default Content;