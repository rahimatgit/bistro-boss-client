import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
    </>

    return (
        <div className="navbar max-w-7xl fixed z-10 bg-base-100 bg-opacity-30 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <h3 className="text-2xl font-bold">Bistro Boss</h3> 
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-slate-700 text-white">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;