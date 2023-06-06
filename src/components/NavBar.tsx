import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='flex justify-between'>
      <span className='pr-6 text-white'>
        <Link to='/'>Home</Link>
      </span>
      <span className='pr-6 text-white'>
        <Link to='/meals'>Meals</Link>
      </span>
      <span className='pr-6 text-white'>
        <Link to='/drinks'>Drinks</Link>
      </span>
    </div>
  );
}
