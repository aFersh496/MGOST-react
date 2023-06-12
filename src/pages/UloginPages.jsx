import { Login } from 'companents/Login';
import { Link } from 'react-router-dom';

const UloginPages = () => {
  return (
<div className="content p-30 ">
          <h1>АВТОРИЗАЦИЯ</h1>
          <Login />
          <p>
              Or <Link to="/register">register</Link>
          </p>
          <p>
              Or <Link to="/uhomepages">register</Link>
          </p>
      </div>
  )
}
export default UloginPages;