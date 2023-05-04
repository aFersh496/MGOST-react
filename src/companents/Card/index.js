import styles from './Card.module.scss'
import React from 'react';


function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };
    return(
      <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
    <img width={30} height={30} src="img\nolike.svg"alt="unliked"/>
    </div>
    <img width={180} height={180} src={imageUrl}alt=""/>
    <h5>{title}</h5>
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