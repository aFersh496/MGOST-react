import { SignUp } from 'companents/SighUp';
import { Link } from 'react-router-dom';
const UregisPages = ()=>{
  return(
    <div className="content p-30 ">
    <div>
    <div className=" ml-50">
<div className=" ml-50">
<div className=" ml-50">
<div className=" ml-50"> <div className=" ml-50"> <div className=" ml-50"> 
<h1>
  РЕГИСТРАЦИЯ
</h1>
<SignUp/>
<div className=" mt-20">
<p>
  Уже есть аккаунт? <Link to="/login"> ВОЙТИ
  </Link>
</p>
    </div></div> </div></div></div></div></div></div></div>
  )
}
export default UregisPages;