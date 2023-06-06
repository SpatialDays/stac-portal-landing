import "./style.scss";

import config from "../../site-config.json";

const Heading = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="heading-container">
      <div className="container">
        <div className="heading">
          <div className="heading__logo" onClick={handleClick}>
            <img src={config.logo.src} alt={config.logo.alt} />
          </div>
          <div className="heading__login">
            <h3 className="heading__login__title">Log In</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
