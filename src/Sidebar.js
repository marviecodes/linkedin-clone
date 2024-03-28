import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Osondu Marvelous</h2>
        <h4>marvnonso554@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile?</p>
          <p className="stat__number">3,963</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="stat__number">1,481</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
