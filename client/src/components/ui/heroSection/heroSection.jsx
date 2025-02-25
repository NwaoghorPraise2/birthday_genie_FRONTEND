import "./heroSection.scss";

import Button from "../../reusable/button/button";
import HeroShowcase from "../../reusable/heroShowcase/heroShowcase";

const images = [
  "/imgs/mini_1.jpg", 
  "/imgs/mini_2.jpg", 
  "/imgs/mini_3.jpg", 
  "/imgs/mini_4.jpg", 
  "/imgs/mini_5.jpg", 
  "/imgs/mini_6.jpg", 
  "/imgs/mini_7.jpg", 
  "/imgs/mini_8.jpg", 
  "/imgs/mini_9.jpg", 
]

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="container">
        <div className="hero_text">
          <h2>It's never been</h2>
          <h1>
            Easier managing <span>birthdays</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <Button primary text="Get Started" toUrl="/auth/signup" />
        </div>
        <HeroShowcase mainImg="/imgs/Hero Image.png" miniImgs={images} />
        <hr />
      </div>
    </div>
  );
};

export default HeroSection;
