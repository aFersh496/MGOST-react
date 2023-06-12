import { useAuth } from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { removeUser } from 'store/slices/userSlice';

const UhomePages= () => {
  const dispatch = useDispatch();

  const {isAuth, email} = useAuth();

  return isAuth ? (
      <div>
          <h1>Welcome</h1>

          <button
              onClick={()=> dispatch(removeUser())}
          >Log out from {email}</button>
      </div>
  ) : (
      <Redirect to="/login" />
  )
}
export default UhomePages;