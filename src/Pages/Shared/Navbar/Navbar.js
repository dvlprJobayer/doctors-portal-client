import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItem = <>
    <li><NavLink className='hover:bg-accent hover:text-white active:bg-yellow-500' to='/'>Home</NavLink></li>
    <li><a className='hover:bg-accent hover:text-white' href='/about'>About</a></li>
    <li><a className='hover:bg-accent hover:text-white' href='/appointment'>Appointment</a></li>
</>

const Navbar = () => {
    return (
        <header className='container mx-auto'>
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;