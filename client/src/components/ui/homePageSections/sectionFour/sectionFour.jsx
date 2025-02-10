import "./sectionFour.scss";
import SectionTitle from "../../../reusable/sectionTitle/sectionTitle";
import Button from "../../../reusable/button/button";

const SectionFour = () => {
  return (
    <div className="SectionFour">
      <div className="image_box">
        <img
          src="/imgs/Frame 1000005228.png"
          alt="Man celebrating birthday with kid"
        />
      </div>
      <div className="text_box">
        <SectionTitle
          title="Be Different"
          subtitle="Celebrate Your Loved Ones Like Never Before!"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
          sit amet consectetur. Lorem ipsum dolor sit actetur. Lorem ipsum dolor
          sit amet consecm ipsum dolor sit amet consectetur. Lorem ipsum dolor
          sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
          ipsum dolor sit amet consectetur.
        </p>
        <Button primary text="Add a friend today!" />
      </div>
    </div>
  );
};

export default SectionFour;
