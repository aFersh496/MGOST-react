
import React from 'react';
import axios from 'axios';
import {   Route, Switch } from 'react-router-dom';
import CartDrawer from "./companents/CartDrawer";
import Header from "./companents/Header";
import Footer from "./companents/Footer";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Assortiment from './pages/Assortiment';
import Konstructr from './pages/Konstructr';
import Contacts from './pages/Contacts';
import Otzevs from './pages/Otzevs';
import Navesn from './pages/Navesn';
import Napol from './pages/Napol';
import Stols from './pages/Stols';
import Styls from './pages/Styls';
import Akkses from './pages/Akkses';
import Moiks from './pages/Moiks';
import UhomePages from 'pages/UhomePages';
import UregisPages from 'pages/UregisPages';
import UloginPages from 'pages/UloginPages';



function App() {
  const [items, setItems] = React.useState([]);
  const [itemsNav, setItemsNav] = React.useState([]);
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
    axios.get('https://6418791775be53f451e06be7.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://6418791775be53f451e06be7.mockapi.io/items').then((res) => {
      setItemsNav(res.data);
    });
    axios.get('https://6418791775be53f451e06be7.mockapi.io/Cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://6418791775be53f451e06be7.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6418791775be53f451e06be7.mockapi.io/Cart',obj);
    setCartItems((prev) => [...prev, obj]);
  };


  const onRemoveItem = (id) => {
    axios.delete(`https://6418791775be53f451e06be7.mockapi.io/Cart/${id}`);
 // setCartItems((prev) => [...prev, obj]);
 setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => { //фсинхронная ф-я
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://6453cf2cc18adbbdfea850ec.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://6453cf2cc18adbbdfea850ec.mockapi.io/favorites',obj);
        setFavorites((prev) => [...prev, data]);//также как и then
    } 
  } catch(error){
    alert('не удалось добавить в закладки')
  }
  
};
  

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
};


  return ( 
  <div className="wrapper clear">
      {cartOpened && (
        <CartDrawer items={cartItems} onClose={() => setCartOpened(false)}
         onRemove={onRemoveItem} />
      )}
     <Header onClickCart={() => setCartOpened(true)} />
      <Switch>
          <Route exact path="/uhomepages" component={UhomePages}/>
          <Route exact path="/login" component={UloginPages}/>
          <Route exact path="/register" component={UregisPages}/>

      </Switch>
        
     <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path="/Assortiment" exact>
        <Assortiment
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        /></Route>
   <Route path="/Navesn" exact>
        <Navesn
          
          itemsNav={itemsNav}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />

      </Route>

      <Route path="/Napol" exact>
        <Napol
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
   <Route path="/Stols" exact>
        <Stols
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path="/Styls" exact>
        <Styls
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/Moiks" exact>
        <Moiks
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/Akkses" exact>
        <Akkses
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/Konstructr" exact>
        <Konstructr
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route> 
      <Route path="/Contacts" exact>
        <Contacts />
      </Route> 

      <Route path="/Otzevs" exact>
        <Otzevs />
      </Route> 

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
     <div > <Footer></Footer>
      </div> 
    </div>
  );
}

export default App;
