import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../store/auth_slice";

const Header = () => {
  let { isLogiIn } = useSelector((state) => state.isLogiIn);
  let dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fs-3" href="/">
          Navbar
        </a>
        <button
          className="btn btn-outline-info"
          onClick={() => dispatch(logInOut())}
        >
          {isLogiIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
