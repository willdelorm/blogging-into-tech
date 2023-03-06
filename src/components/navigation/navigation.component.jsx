import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <nav className="navigation-container">
        <div className="logo-icon-container">
          <img src="https://picsum.photos/48" alt="" />
        </div>
        <div className="nav-menu-container">
          <ul className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/compose">Compose</Link>
            {currentUser ? (
              <div onClick={signOutUser}>Sign Out</div>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
