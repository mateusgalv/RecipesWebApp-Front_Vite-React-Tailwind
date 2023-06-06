import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../index.css';

export default function Home() {
  const navigate = useNavigate();

  const handleLoginBtn = () => {
    navigate('/login');
  };

  const handleGetStartedBtn = () => {
    navigate('/meals');
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <div className='background-container flex items-center justify-center'>
        <div
          className='w-64'
        >
          <h1 className='text-2xl'>Recipes Web App</h1>
          <p>
            Cook your favorite
            <span className='text-crayola text-xl'> recipes</span>
          </p>
          <div className='flex mt-2'>
            <button
              onClick={handleGetStartedBtn}
              className='border-2 rounded border-crayola bg-crayola p-2 text-white mr-2 w-32'
            >
              Get started
            </button>
            <button
              onClick={handleLoginBtn}
              className='border-2 rounded border-crayola bg-crayola p-2 text-white w-32'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
