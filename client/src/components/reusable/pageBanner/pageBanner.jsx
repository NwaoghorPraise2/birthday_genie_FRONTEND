import "./pageBanner.scss";
import HeroShowcase from "../../reusable/heroShowcase/heroShowcase";

const PageBanner = ({text, mainImg, miniImgs}) => {
  return (
    <div className="PageBanner">
      <HeroShowcase mainImg={mainImg} miniImgs={miniImgs} />
      <h2>{text}</h2>
      <hr />
    </div>
  );
};

export default PageBanner;
