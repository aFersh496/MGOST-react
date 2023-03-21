import Card from "./companents/Card";
import CartDrawer from "./companents/CartDrawer";
import Header from "./companents/Header";
import React from 'react';



function App() {
  const [items,  setItems] = React.useState([]);
  const [cartItems,  setCartItems] = React.useState([
    {
      "title": "Напольный шкаф серый",
      "price": 12999,
      "imgUrl": "img/m1.png"
    },
    {
      "title": "Напольный шкаф белый",
      "price": 7855,
      "imgUrl": "img/m2.png"
    },
  ]);
  const[cartOpened, setCartOpened]=React.useState(false);

  React.useEffect(()=>{
    fetch('https://6418791775be53f451e06be7.mockapi.io/items')
    .then((res)=> {
      return res.json();
    })
    .then((json)=> {
      setItems(json);
    });

  }, []);



  return ( 
  <div className="wrapper clear">
     {cartOpened && <CartDrawer items={cartItems}  onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

    <div className="content  p-40"> 
      <div className="d-flex align-center mb-40 justify-between" mb-40>
        <h1 >Ассортимент</h1>
        <div className="search-block d-flex align-center">
        <img width={18} height= {18} src="img\searchh.svg" alt="Search"/>
        <input placeholder="Поиск..."/>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((obj)=>( 
          <Card 
        title={obj.title}
        price={obj.price}
        imgUrl={obj.imgUrl}
        onClickFavorite={()=> console.log('Добави в закладки')}
        onClickPlus={()=> console.log('Нажали плюс')}
         />
         ))}
        
       
         
      </div>
    </div>      
  </div>
  );
}

export default App;
