import Card from '../companents/Card';
import { Link } from 'react-router-dom';


function Home({
    items,
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
                <h1> GOST-МЕБЕЛЬ</h1>
               
             
            </div>
            <div className='mb-50'>
                   <img className="d-flex align-center" width={1000} src="img\fon.svg" alt='q'/>
               </div>

               <div className="ml-30 d-flex" >
                 <ul className="d-flex ">
                       <li><Link to="/Navesn">
                  <div className=" mr-30 "> <img className="d-flex align-center" width={300} src="img\nav.png" alt='q'/> </div>  </Link></li>
                  <Link to="/Napol">  <li><div  className=" mr-30 "> <img className="d-flex align-center" width={300} src="img\nap.png" alt='q'/> </div></li></Link>
                  <Link to="/Stols"> <li><div  className="  "> <img className="d-flex align-center" width={300} src="img\stol.png" alt='q'/> </div></li></Link>
                  
                 </ul>
                   </div>

                  
                   <div className="ml-30 d-flex mt-40" >
                 <ul className="d-flex ">
                 <Link to="/Styls"><li><div className=" mr-30 "> <img className="d-flex align-center" width={300} src="img\styly.png" alt='q'/> </div></li></Link>
                 <Link to="/Akkses"> <li><div  className=" mr-30 "> <img className="d-flex align-center" width={300} src="img\sysh.png" alt='q'/> </div></li></Link>
                 <Link to="/Moiks"> <li><div  className="  "> <img className="d-flex align-center" width={300} src="img\mouk.png" alt='q'/> </div></li></Link>
                  
                 </ul>
                   </div >

                   <div  className=" ml-30 mt-30"> <img  width={960} src="img\q.png" alt='q'/> </div>
                   <div  className=" ml-30 mt-30 "> <img  width={960} src="img\Group125.png" alt='q'/> </div>
                   
                </div>
              );
            }
            
            export default Home;