import PageBanner from "../../../components/reusable/pageBanner/pageBanner";
import "./about.scss";

const images = [
  "/imgs/mini_4.jpg",
  "/imgs/mini_2.jpg",
  "/imgs/mini_8.jpg",
  "/imgs/mini_3.jpg",
  "/imgs/mini_6.jpg",
  "/imgs/mini_1.jpg",
  "/imgs/mini_7.jpg",
  "/imgs/mini_9.jpg",
  "/imgs/mini_5.jpg",
];

const About = () => {
  return (
    <div className="About">
      <PageBanner
        text="About us"
        mainImg="/imgs/Hero Image About.png"
        miniImgs={images}
      />
    </div>
  );
};

export default About;
