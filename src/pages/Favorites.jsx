import Card from '../companents/Card/';
//import Card from '../src/components/Card/index.js'

function Favorites({ items, onAddToFavorite }) {
    return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
            <h1 >ИЗБРАННОЕ</h1>  
            </div>

            <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <Card key={index} 
          favorited={true} 
          onFavorite={onAddToFavorite} 
          {...item} /> //Конкатенация
                
                
          ))}
          </div>
        </div>
      );
    }
    
    export default Favorites;