import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/logo.svg";
import { AuthProvider } from "../../layout/AuthContext";
const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthProvider);

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("logOut Successfull");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/orders">Orders</Link>
      </li>

      <li>
        {user?.email ? (
          <>
            <button onClick={handleLogOut}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <img className="w-20" src={img} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-accent">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
