import "./HeaderOption.css";

const HeaderOption = ({ title, Icon }) => {
  return (
    <div className="HeaderOption">
      {Icon && <Icon className="HeaderOption__icon" />}
      <h3 className="HeaderOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
