import React from "react";
import { HiMenuAlt1, HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link className="font-semibold text-primary" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-primary" to="/services">
          Services
        </Link>
      </li>

      <li>
        <Link className="font-semibold text-primary" to="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link className="font-semibold text-primary" to="/blogs">
          Blogs
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-primary lg:hidden">
            <HiMenuAlt1 className="h-6 w-6" />
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold text-base-200 hidden sm:flex md:flex lg:flex"
        >
          Bahauddin Fahad
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <HiOutlineDotsVertical />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
