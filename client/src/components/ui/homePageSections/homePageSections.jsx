import "./homePageSections.scss";
import SectionEight from "./sectionEight/sectionEight";
import SectionFive from "./sectionFive/sectionFive";
import SectionFour from "./sectionFour/sectionFour";
import SectionSeven from "./sectionSeven/sectionSeven";
import SectionSix from "./sectionSix/sectionSix";
import SectionThree from "./sectionThree/sectionThree";
import SectionTwo from "./sectionTwo/sectionTwo";
import Faq from "../faq/faq"

const HomePageSections = () => {
  return <div className="HomePageSections">
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
    <Faq />
  </div>;
};

export default HomePageSections;
