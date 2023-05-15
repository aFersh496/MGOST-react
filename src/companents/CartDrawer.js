import React from 'react';

function CartDrawer({ onClose, onRemove, items = [] }) {
    return(
        <div className="drawerShadow">

        <div  className="drawer">
          <h2 className="mb-30 d-flex justify-between ">
            Корзина
          <img onClick={onClose} className="cu-p" width={32} height= {32} src="/img/dropcart.svg" alt="Close"/>
          </h2>
          {
            items.length >0?<div className="items">
          <div>
          {items.map((obj)=>(
              <div className="cartItem d-flex align-center mb-20">
                <div 
                   style={{ backgroundImage: 'url(${obj.imageUrl})' }}
                   className="cartItemImg"></div>
                
                
                
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <img onClick={()=>onRemove(obj.id)} className="removeBtn ml-50" width={32} height= {32} src="img\dropcart.svg" alt="remove"/> 
              </div>
    
            ))
          }
          </div>
          
           <div>
            <div  className="cartTotalBlock">
            <ul >
              <li>
              <span>Итого:</span>
              <div></div>
              <b>21 455 руб.</b>
              </li>
          
              <li>
              <span>Доставка:</span>
              <div></div>
              <b>1000 руб.</b>
              </li>
              </ul>
            <button className="greenButton" >оформить заказ
            <img width={20} height= {20} src="img\strelka.svg"/>
            </button>
          </div> 
        </div>
        </div>

          :
          
          
          <div class="cartEmpty d-flex align-center justify-center flex-column flex">

            <img class="mb-20" width={250} height={390} src="/img/mtcart.svg"></img>
            <button onClick={onClose} className="greenButton" >Вернуться к покупкам
           
            </button>
          </div>
          
          }
          
        
       

      
       </div> 
    
      </div>
    );
}

export default CartDrawer;