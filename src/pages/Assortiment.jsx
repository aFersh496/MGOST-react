import Card from '../companents/Card';


function Assortiment({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
  }) {

    return(
            <div className="content p-40">
              
              
               
              <div className="d-flex align-center justify-between mb-40">
                <h1> АССОРТИМЕНТ</h1>
               
                <div className="search-block d-flex align-center">
                    <img width={18} height= {18} src="img\searchh.svg" alt="Search"/>

                    {searchValue && <img onClick={()=> setSearchValue('')} 
                    className="cu-p clear" width={32} height= {32} src="/img/dropcart.svg" alt="Clearrr"/>}
                    
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                </div>
            </div>
            <div className="d-flex flex-wrap">
            {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
                    <Card
                    key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    {...item}
                  />
                  ))}
                  </div>
                </div>
              );
            }
            
            export default Assortiment;