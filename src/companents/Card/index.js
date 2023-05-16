import styles from './Card.module.scss'
import React from 'react';


function Card({ id, title,sizes, colour, imageUrl, price, onFavorite, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  
  const onClickPlus = () => {
    onPlus({ title, sizes, colour, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, colour,sizes, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

    return(
      <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
    <img src={isFavorite ?  'img/like.svg':'img/nolike.svg'} width={30} height={30} alt="unliked"/>
    </div>
    <img width={180} height={180} src={imageUrl}alt=""/>
    <h5>{title}</h5>
    <h8>цвет: {colour}</h8><br/>
    <h8>габариты: {sizes}</h8>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column ">
        <span>Цена:</span>
        <b>{price}</b>
      </div>
        
        <img 
       className={styles.plus}
       onClick={onClickPlus}
        src={isAdded ?  'img/yeah.svg':'img/plus.png'}
        alt="Plus"
        />
      </div>
    </div>
  );
}
export default Card;