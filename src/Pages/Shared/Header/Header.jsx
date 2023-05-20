import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {

    const { user, logOut, loader, setLoader } = useContext(AuthContext);

    const signOut = () => {
        setLoader(true)
        setTimeout(logOut, 1000)
    }

    const navItems = () => <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "active font-bold" : "hover:bg-transparent"}>Home</NavLink></li>
        <li><NavLink to={'/alltoys'} className={({ isActive }) => isActive ? "active font-bold" : "hover:bg-transparent"}>All Toys</NavLink></li>
        {user &&
            <>
                <li><NavLink to={'/mytoys'} className={({ isActive }) => isActive ? "active font-bold" : "hover:bg-transparent"}>My Toys</NavLink></li>
                <li><NavLink to={'/addtoy'} className={({ isActive }) => isActive ? "active font-bold" : "hover:bg-transparent"}>Add a Toy</NavLink></li>
            </>
        }
        <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? "active font-bold" : "hover:bg-transparent"}>Blogs</NavLink></li>
    </>

    const navAccessBtn = () => <>
        {!user ?
            <>
                <NavLink to={'/login'} className={({ isActive }) => isActive ? 'active-secondary' : 'common-active-secondary'}>
                    Login
                </NavLink>
                <NavLink to={'/registration'} className={({ isActive }) => isActive ? 'active-secondary' : 'common-active-secondary'}>
                    Signup
                </NavLink>
            </>
            :
            <NavLink onClick={signOut} to={'/login'} className={({ isActive }) => isActive ? 'active-secondary' : 'common-active-secondary'}>
                Log Out
            </NavLink>

        }
    </>

    return (
        <div className="navbar custom-container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost pr-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems()}
                        {navAccessBtn()}
                    </ul>
                </div>
                <Link to={'/'} ><img src={logo} alt="TrovTitansLogo" className='lg:h-14 btn btn-ghost p-3 pl-1 md:p-2' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems()}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className='flex'>
                    <span className='hidden md:block'>{navAccessBtn()}</span>
                </div>
                {user &&
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <div className="group">
                                    <img src={user.photoURL} />
                                    <p className='opacity-0 group-hover:opacity-100 absolute text-2xl text-error font-semibold z-30'>{user.displayName}</p>
                                </div>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            {/* <li><a>Logout</a></li>    -------->>>> After Assignment mark make this as a logout button   */}
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;