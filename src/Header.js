import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./linkedin.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" />
        <HeaderOption />
        <HeaderOption />
      </div>
    </div>
  );
};

export default Header;
