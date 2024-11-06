import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../../layouts/MainLayout';

const Navbar = () => {
  const { count, wishList } = useContext(CartContext);

  return (
    <nav className="bg-[#9538E2] backdrop-blur-3xl top-0 sticky z-50 py-1">
      <div className="navbar container mx-auto">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
            >
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? '  text-black' : ''}`
                }
                to={'/'}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? '  text-black' : ''}`
                }
                to={'/statistics'}
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? '  text-black' : ''}`
                }
                to={'/dashboard'}
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <a className=" text-xl text-white">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base font-medium text-white">
            <NavLink
              className={({ isActive }) => `${isActive ? '  text-black' : ''}`}
              to={'/'}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? '  text-black' : ''}`}
              to={'/statistics'}
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? '  text-black' : ''}`}
              to={'/dashboard'}
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Link className="rounded-full bg-gray-200 px-2 py-1 relative">
            <div>
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              <span className="absolute -top-3 -right-0 bg-black text-xs px-1 rounded-full text-white">
                {count}
              </span>
            </div>
          </Link>
          <Link className="rounded-full bg-gray-200 px-2 py-1">
            <div className="relative">
              <i className="fa-regular fa-heart"></i>
              <span className="absolute -top-3 -right-3 bg-black text-xs px-1 rounded-full text-white">
                {wishList}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
