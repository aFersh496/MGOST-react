//import React from 'react';
import { Link } from 'react-router-dom';
function Header(props){
 

    return(
    <header className="d-flex justify-between align-center p-40">
    <Link to="/"> 
    <div className="d-flex align-center">
    
      <img  height= {35} src="img\logo.png" alt='q'/>
      
      <div >
        <h3 className="text-uppercase">GOST-мебель</h3>
        <p className="opacity-5">Новосибирская мебельно-производственная фирма </p>
       
      </div>
    </div>
    </Link>
    <br/> <div className="d-flex justify-between">
      
    </div>
    
 
    <ul className="d-flex"> 
    <li onClick={props.onClickCart} className="mr-20 cu-p">
        <img width={18} height= {18} src="img\korzina.png" alt='q'/>
        <span>   15000 руб.</span>
      </li>
      <li className="mr-20 cu-p">
        <Link to="/favorites">
        <img width={18} height= {18} src="img\headerLike.svg" alt='q'/>
        </Link>
      
      </li>
      <li>
      <img width={18} height= {18} src="img\Union.png"alt='q'/>
      </li>
    </ul> 
    
    
   
   
    
    
  </header>
    );
}
export default Header;