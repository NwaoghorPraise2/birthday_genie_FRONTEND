import HeroSection from "../../../components/ui/heroSection/heroSection";
import HomePageSections from "../../../components/ui/homePageSections/homePageSections";
import "./home.scss";

const Home = () => {
  return (
    <div className="Home">
      <HeroSection />
      <HomePageSections />
    </div>
  );
};

export default Home;
