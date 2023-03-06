import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navigation-container">
        <div className="logo-icon-container">
          <img src="https://picsum.photos/48" alt="" />
        </div>
        <div className="nav-menu-container">
          <ul className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/archive">Archive</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/compose">Compose</Link>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
