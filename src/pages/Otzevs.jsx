import Card from '../companents/Card';


function Otzevs({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
  }) {

    return(
            <div className="content p-30 ">
              
              <div>
                   <img className="d-flex align-center" width={1020} src="img\prev.png" alt='q'/>
               </div>
               
              <div className="d-flex align-center justify-between mb-40">
                <h1>Отзывы</h1>
                
               </div>
               <img className="d-flex ml-30" width={960} src="img\contacts.png" alt='q'/>
          
                
                   
           
                </div>
                
              );
            }
            
            export default Otzevs;