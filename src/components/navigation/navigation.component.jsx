import MenuItem from "../menu-item/menu-item.component";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <div className="logo-icon-container">
        <img src="https://picsum.photos/48" alt="" />
      </div>
      <div className="nav-menu-container">
        <ul className="nav-menu">
          <MenuItem name="Home" />
          <MenuItem name="Blog" />
          <MenuItem name="Bookmarks" />
          <MenuItem name="Elements" />
          <MenuItem name="Playlists" />
          <MenuItem name="Books" />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
