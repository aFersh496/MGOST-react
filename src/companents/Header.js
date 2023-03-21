import React from 'react';
function Header(props){
 

    return(
        <header className="d-flex justify-between align-center p-40">
    <div className="d-flex align-center">
      <img width={40} height= {40} src="img\Pepsi2008.gif"/>
      <div >
        <h3 className="text-uppercase">MGOST</h3>
        <p className="opacity-5">Магазин мебели</p>
      </div>
    </div>
    <ul className="d-flex"> 
    <li onClick={props.onClickCart} className="mr-30 cu-p">
        <img width={18} height= {18} src="img\korzina.png"/>
        <span>15000 руб.  </span>
      </li>
      <li>
      <img width={18} height= {18} src="img\Union.png"/>
      </li>
    </ul>
  </header>
    );
}
export default Header;