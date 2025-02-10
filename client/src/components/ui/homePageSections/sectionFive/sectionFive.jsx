import "./sectionFive.scss";
import SectionTitle from "../../../reusable/sectionTitle/sectionTitle";
import Button from "../../../reusable/button/button";

const SectionFive = () => {
  return (
    <div className="SectionFive">
      <div className="text_box">
        <SectionTitle
          title="Get To Know Us"
          subtitle="We assist you with remembering "
          highlighted="Birthdays"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
          sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
          ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
          sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
          ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur.
        </p>
        <Button primary text="Get to know us" />
      </div>
      <div className="image_box">
        <img
          src="/imgs/Frame 1100005228.png"
          alt="Man celebrating birthday with kid"
        />
        <div className="duo">
          <img
            src="/imgs/Frame 1000005229.png"
            alt="Man and woman celebrating birthday with kid"
          />
          <img
            src="/imgs/Frame 1000005230.png"
            alt="Man and woman celebrating birthday with kid standing"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
