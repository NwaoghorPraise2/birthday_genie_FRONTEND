import "./heroShowcase.scss";

const HeroShowcase = ({ mainImg, miniImgs }) => {
  return (
    <div className="HeroShowcase">
      <div className="main_img_row">
        <img src={mainImg} alt="main hero photo" />
      </div>
      <div className="mini_img_row">
        {miniImgs.map((img, index) => (
          <div key={index} className="mini_img">
            <img src={img} alt={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroShowcase;
