import NavBar from "./NavBar";
import User from "./User";

export default function Header() {
  return (
    <div className='w-full h-14 flex bg-rusty-red shadow-black items-center text-lg'>
      <div className='mr-20 ml-6 text-white'>
        Recipes App
      </div>
      <div className='mr-auto'>
        <NavBar />
      </div>
      <div className='mr-6 text-white'>
        <User />
      </div>
    </div>
  )
}
