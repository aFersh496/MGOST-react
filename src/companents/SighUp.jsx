import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from 'store/slices/userSlice';
import {Form} from './Form';

const SignUp = ()=>{
    const dispatch = useDispatch();
    const {push}= useHistory();
  
    const handleRegister =(email, password)=>{
        const auth = getAuth();
       
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id:user.uid,
                    token:user.accessToken,
                }))
                push('/Napol')
            })
            .catch(console.error)
     }

    return(
       < Form
            title="ЗАРЕГИСТРИРОВАТЬСЯ"
            handleClick={handleRegister}
       />
    )
}
export {SignUp}