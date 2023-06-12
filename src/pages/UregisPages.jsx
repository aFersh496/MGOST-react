import { SignUp } from 'companents/SighUp';
import { Link } from 'react-router-dom';
const UregisPages = ()=>{
  return(
    <div className="content p-30 ">
    <div>
<h1>
  РЕГИСТРАЦИЯ
</h1>
<SignUp/>
<p>
  Уже есть аккаунт? <Link to="/login"> ВОЙТИ
  </Link>
</p>
    </div></div>
  )
}
export default UregisPages;