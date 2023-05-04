import Card from "./companents/Card";
import CartDrawer from "./companents/CartDrawer";
import Header from "./companents/Header";
import React from 'react';
import axios from 'axios';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(()=>{
    /*fetch('https://6418791775be53f451e06be7.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });*/
    axios.get('https://6418791775be53f451e06be7.mockapi.io/items').then((res)=> {
      setItems(res.data);
    });
    axios.get('https://6418791775be53f451e06be7.mockapi.io/Cart').then((res)=> {
      setCartItems(res.data);
    });
    
}, []);

const onAddToCart = (obj) => {
  axios.post('https://6418791775be53f451e06be7.mockapi.io/Cart',obj);
  setCartItems((prev) => [...prev, obj]);
};


const onRemoveItem =(id) =>{ 
  axios.delete(`https://6418791775be53f451e06be7.mockapi.io/Cart/${id}`);
 // setCartItems((prev) => [...prev, obj]);
  setCartItems((prev) => prev.filter((item) => item.id !== id));
}

const onAddToFavorite = (obj) => {
  axios.post('https://6453cf2cc18adbbdfea850ec.mockapi.io/favorites',obj);
  setFavorites((prev) => [...prev, obj]);
};
  
const onChangeSerchInput =(event)=>{
    setSearchValue(event.target.value);
}


  return ( 
  <div className="wrapper clear">
      {cartOpened && <CartDrawer items={cartItems} onClose={() => setCartOpened(false)} 
      onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)} />
    <div className="content  p-40"> 
      <div className="d-flex align-center mb-40 justify-between" mb-40>
        <h1 >
          {searchValue ?'Поск по запросу:"${searchValue}"':'все красовки' }
        </h1>
        <div className="search-block d-flex align-center">
        <img width={18} height= {18} src="img\searchh.svg" alt="Search"/>

        {searchValue && <img onClick={()=> setSearchValue('')} 
        className="cu-p clear" width={32} height= {32} src="/img/dropcart.svg" alt="Clearrr"/>}
        
        <input onChange={onChangeSerchInput} value={searchValue} placeholder="Поиск..."/>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items.filter(item=>item.title.toLowerCase().includes(searchValue)).map((item,index)=>( 
        <Card 
        key={index}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
