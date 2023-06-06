import config from "../../site-config.json";
import "./style.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">{config.hero.heading}</h1>
        <p className="banner__description">{config.hero.subheading}</p>
        <div className="banner__btn">
          <a href={config.hero.buttonURL} target="_blank" rel="noreferrer">
            <button className="btn btn--primary">
              {config.hero.buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
