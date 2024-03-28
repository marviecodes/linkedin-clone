import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./linkedin.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCentreIcon from "@mui/icons-material/Business";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

//Justify content - horizontally
//Align Items - vertically

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
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="jobs" Icon={BusinessCentreIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          avatar="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="me"
        />
      </div>
    </div>
  );
};

export default Header;
