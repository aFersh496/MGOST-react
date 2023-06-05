//import React from 'react';
import { Link } from 'react-router-dom';
function Header(props){
 

    return(
    <header className="d-flex justify-between align-center p-15">
      <ul><li>
    <Link to="/"> 
    <div className="d-flex align-center">
    
      <img  height= {35} src="img\logo.png" alt='q'/>
      
      <div >
        <h3 className="text-uppercase">GOST-мебель</h3>
        <p className="opacity-5">Новосибирская мебельно-производственная фирма </p>
       
      </div>
    </div>
    </Link>
    </li>
    <li>
<ul className="d-flex mt-20 ml-50 ">
  <li>
<div className="mr-20 cu-p">ассортимент </div>
  </li>

  <li>
<div className="mr-20 cu-p">конструктор </div>
  </li>

  <li>
<div className="mr-20 cu-p">контакты</div>
  </li>
  <li>
<div className="mr-20 cu-p">отзывы</div>
  </li>
</ul>


    </li>
    </ul>
    


    <ul>
<li>

    <ul className="d-flex mr-30"> 
    <li onClick={props.onClickCart} className="mr-20 cu-p">
        <img width={18} height= {18} src="img\korzina.png" alt='q'/>
        <span> </span>
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
</li>

    </ul>
   
   
    
    
  </header> 
  
    );
}
export default Header;