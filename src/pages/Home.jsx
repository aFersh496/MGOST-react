import Card from "../companents/Card";


function Home({
            items,
            searchValue,
            setSearchValue,
            onChangeSerchInput,
            onAddToFavorite,
            onAddToCart,
        }){

    return(

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
    );
}
export default Home;