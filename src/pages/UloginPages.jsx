import { Login } from 'companents/Login';
import { Link } from 'react-router-dom';

const UloginPages = () => {
  return (
<div className="content p-30 ml-50">
<div className=" ml-50">
<div className=" ml-50">
<div className=" ml-50">
<div className=" ml-50"> <div className=" ml-50"> 
          <h1>АВТОРИЗАЦИЯ</h1>
          <Login />
          <div className=" mt-20">
<p>
            нет аккаунта?   
             <Link to="/register">  РЕГИСТРАЦИЯ</Link>
          </p>
          </div>
          
          
      </div>  </div></div></div></div></div>
  )
}
export default UloginPages;