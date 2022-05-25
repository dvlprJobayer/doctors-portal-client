import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';


const Navbar = () => {

    const [user] = useAuthState(auth);

    const menuItem = <>
        <li><Link className='hover:bg-accent hover:text-white' to='/'>Home</Link></li>
        <li><Link className='hover:bg-accent hover:text-white' to='/appointment'>Appointment</Link></li>
        {
            user
                ?
                <>
                    <li><Link className='hover:bg-accent hover:text-white' to='/dashboard'>Dashboard</Link></li>
                    <li><button onClick={() => signOut(auth)} className='hover:bg-accent hover:text-white' to='/login'>Logout</button></li>
                </>
                :
                <li><Link className='hover:bg-accent hover:text-white' to='/login'>Login</Link></li>
        }
    </>

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
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-end">
                    <label for="dashboard" className="btn btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
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