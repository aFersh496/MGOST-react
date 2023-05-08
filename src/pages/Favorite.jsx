import Card from "../companents/Card";


function Favorite(items, onAddToFavorite){

    return(

        <div className="content  p-40"> 
            <div className="d-flex align-center mb-40 justify-between" mb-40>
            <h1 >Закладки</h1>  
            </div>

            <div className="d-flex flex-wrap"> 
            {items.map((item,index)=>( 
                <Card 
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                favorite={true}
                onFavorite={onAddToFavorite}
                
                />
                ))}
            
            </div>
        </div>
    );
}
export default Favorite;