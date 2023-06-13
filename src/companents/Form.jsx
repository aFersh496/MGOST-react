import {useState} from 'react';
const Form = ({title, handleClick}) => {
    const [email, setEmail]=useState('');
    const [pass,setPass]=useState('');
    return (
        <div className='ml-30 mt-10'>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="введите логин"
            />
            <div className='mt-10'></div>
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="введите пароль"
            />
            <div className='mt-10'></div>
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    )
}
export {Form}