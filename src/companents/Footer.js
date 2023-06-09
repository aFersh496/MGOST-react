//import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props){
 

    return(
    <footer className="d-flex justify-between align-center p-15 mt-50 mb-30">
      <ul className="ml-5 d-flex">
        <li>
          <Link to="/"> 
          <div className="d-flex align-center">
            <img  height= {25} src="img\logo.png" alt='q'/>
          </div>
          </Link>
      </li>
    <li>
    <div className="d-flex align-center">
            <img  height= {70} src="img\cont.png" alt='q'/>
          </div>


    </li>
    </ul>
    



   
   
    
    
  </footer> 
  
    );
}
export default Footer;