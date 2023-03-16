import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation-container">
        <div className="logo-container">
          <span>D</span>
        </div>

        <div className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/compose">Compose</Link>
          {currentUser ? (
            <div className="nav-item" onClick={signOutUser}>
              Sign Out
            </div>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
