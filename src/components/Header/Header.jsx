import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import './Header.css';
import Alert from '../Alert/Alert';
import { AuthContext } from '../../provider/AuthContext';

const Header = () => {
  const { user,signOutUser} = use(AuthContext);

  const navigate = useNavigate();

   const handleLogOut=()=>{
    signOutUser();
    Alert('success','successfully log out');

   }


  
    const links = <>
      
      <NavLink to='/' className='ml-4 a'>HOME</NavLink>
      <NavLink to='/profile' className='ml-4 a'>PROFILE</NavLink>
      <NavLink to='/feedback' className='ml-4 a'>FEEDBACK</NavLink>
    </>
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <p className="font-bold text-xl hidden md:block">EVENT EXPLORER</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
  {user ? (
    <>
      <div className="flex items-center gap-3">
      <div className="relative group inline-block">
  <img
    src={user.photoURL}
    alt="User profile"
    className="w-10 h-10 "
  />
  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 shadow-md whitespace-nowrap z-10">
    {user.displayName || 'User'}
  </div>
</div>

        <button
          onClick={handleLogOut}
          className="btn btn-neutral rounded-none"
        >
          LOG OUT
        </button>
      </div>
    </>
  ) : (
    <button
      onClick={() => navigate('/auth/login')}
      className="btn btn-neutral rounded-none"
    >
      LOG IN
    </button>
  )}
</div>
  
</div>
            
        </div>
    );
};

export default Header;