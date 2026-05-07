import React, { useContext } from "react";
import logoimg from '../../assets/sohojcourier logo.png'
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const {user, setUser} = useContext(AuthContext);

  const handlelogout = ()=>{
    setUser(null);

  }
  return (
    <div className="navbar bg-base-100 shadow-sm max-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Service</a>
            </li>
           
            <li>
              <a>About Us</a>
            </li>
            <li>
                <a > Pricing</a>
            </li>
          </ul>
        </div>
        <img className="w-auto h-15" src={logoimg} alt="Logo" />
        <div className="-ms-4 ">
            <h1 className="text-xl uppercase font-extrabold text-[#0F75B8]">Sohoj</h1>
            <h1 className="text-xl text-[#F97316] uppercase font-extrabold">Courier</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-5 menu-horizontal px-1">
          <NavLink to="/" className={({ isActive }) => `border-none transition duration-300 ${isActive ? "text-[#F97316] font-semibold" : "text-black"}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `border-none transition duration-300 ${isActive ? "text-[#F97316] font-semibold" : "text-black"}`}>
            About Us
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `border-none transition duration-300 ${isActive ? "text-[#F97316] font-semibold" : "text-black"}`}>
            Pricing
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `border-none transition duration-300 ${isActive ? "text-[#F97316] font-semibold" : "text-black"}`}>
            Contact Us
          </NavLink>
           <NavLink to="/send-parcel" className={({ isActive }) => `border-none transition duration-300 ${isActive ? "text-[#F97316] font-semibold" : "text-black"}`}>
              Send Parcel
            </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
       {
        user ? <button onClick={handlelogout} className="btn bg-[#F97316] ml-2">Logout</button> :  <NavLink to="/login" className="btn bg-[#0F75B8]">
          Sign In
        </NavLink>
       }
        <NavLink to="/register" className="btn bg-[#F97316] ml-2">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
