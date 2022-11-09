import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

// menu items for desktop and mobile
  const menuItems = <>
    <li><NavLink to="/" className="font-semibold">Home</NavLink></li>
    <li><NavLink to="/services" className="font-semibold">Services</NavLink></li>
    <li><NavLink to="/blogs" className="font-semibold">Blogs</NavLink></li>
    <li><NavLink to="/about" className="font-semibold">About</NavLink></li>
    <li><NavLink to="/faq" className="font-semibold">FAQ</NavLink></li>
    <li><NavLink to="/contact" className="font-semibold">Contact</NavLink></li>
    {
      (user && user.uid) && 
      <>
        <li><NavLink to="/addservice" className="font-semibold">Add A Service</NavLink></li>
        <li><NavLink to="/myreviews" className="font-semibold">My Reviews</NavLink></li>
      </>
    }
  </>
  
  // logout handle
  const handleLogOut = () => {
    logOut()
    .then({})
    .catch((err) => console.error(err))
  }

    return (
      <div className="navbar shadow-md sticky top-0 z-10 backdrop:blur-[8px] bg-white/75">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Study With Tamim</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user && user.uid ?
          <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} alt="profile" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link>Settings</Link></li>
        <li onClick={handleLogOut}><Link>Logout</Link></li>
      </ul>
    </div>
          :
          <>
            <Link to='/login' className="btn">Login</Link>
          <Link to='/signup' className="ml-2 btn">SignUp</Link>
              </>
        }
          
      </div>
    </div>
    );
};

export default Header;