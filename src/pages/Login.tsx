import { useState } from "react";
import Header from "../components/Header";

export default function Login() {
  const [login, setLogin] = useState({
    user: '',
    password: '',
  });
  const [loginInvalid, setLoginInvalid] = useState(false);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setLogin({
      ...login,
      [target.name]: target.value,
    });
  };

  const handleLogin = () => {
    const { user, password } = login;
    if (user === 'admin' && password === 'admin') {
      // LOGIN SUCCESSFUL
      setLoginInvalid(false);
    } else {
      setLoginInvalid(true);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <Header />
      <div className='mt-12 border-2 border-rounded w-80'>
        <form className='flex flex-col items-center mt-5'>
          <span className='text-red-500 mb-2'>
            {loginInvalid && 'Invalid user or password'}
          </span>
          <input
            className='border-2 w-66 p-2 border-crayola rounded'
            type='text'
            name='user'
            value={login.user}
            onChange={(e) => handleForm(e)}
            placeholder='user'
          />
          <input
            className='border-2 w-66 mt-2 p-2 border-crayola rounded'
            type='password'
            name='password'
            value={login.password}
            onChange={(e) => handleForm(e)}
            placeholder='password'
          />
          <p className='mt-2 text-xs text-red-500'>user: admin / password: admin</p>
          {/* <p className='mt-2 text-xs text-red-500 overflow-wrap'>*You can only use sign in option with my backend API</p> */}
        </form>
        <div className='flex justify-center mt-2 mb-5'>
          <button
            className='border-2 rounded border-crayola bg-crayola p-2 text-white mr-2 w-32'
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className='border-2 rounded border-crayola bg-crayola p-2 text-white w-32'
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}
