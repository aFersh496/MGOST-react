
import React from 'react';
import axios from 'axios';
import {   Route } from 'react-router-dom';
import CartDrawer from "./companents/CartDrawer";
import Header from "./companents/Header";
import Home from './pages/Home';
import Favorites from './pages/Favorite';





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
    axios.get('https://6418791775be53f451e06be7.mockapi.io/favorites').then((res)=> {
      setFavorites(res.data);
      
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
      
        
         <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSerchInput={onChangeSerchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>
      </Route>
      
      
      
     
    


    </div>
  );
}

export default App;
