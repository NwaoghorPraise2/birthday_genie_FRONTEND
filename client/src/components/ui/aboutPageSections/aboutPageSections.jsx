import "./aboutPageSections.scss";
import SectionFour from "./sectionFour/sectionFour";
import SectionOne from "./sectionOne/sectionOne";
import SectionThree from "./sectionThree/sectionThree";
import SectionTwo from "./sectionTwo/sectionTwo";

const AboutPageSections = () => {
  return <div className="AboutPageSections">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
  </div>;
};

export default AboutPageSections;
