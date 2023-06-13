import Card from '../companents/Card';


function Navesn({
    items,
    itemsNav,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
  }) {

    return(
            <div className="content p-40">
              
              
               <div>
                   <img className="d-flex align-center" width={1000} src="img\prev.png" alt='q'/>
               </div>
              <div className="d-flex align-center justify-between mb-40">
                <h1> НАВЕСНЫЕ ШКАФЫ</h1>
               
                <div className="search-block d-flex align-center">
                    <img width={18} height= {18} src="img\searchh.svg" alt="Search"/>

                    {searchValue && <img onClick={()=> setSearchValue('')} 
                    className="cu-p clear" width={32} height= {32} src="/img/dropcart.svg" alt="Clearrr"/>}
                    
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                </div>
            </div>
            <div className="d-flex flex-wrap">
            {itemsNav
          .filter((itemNav) => itemNav.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((itemNav, index) => (
                    <Card
                    key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    {...itemNav}
                  />
                  ))}
                  </div>
                </div>
              );
            }
            
            export default Navesn;