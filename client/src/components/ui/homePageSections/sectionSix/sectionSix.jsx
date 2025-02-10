import "./sectionSix.scss";
import SectionTitle from "../../../reusable/sectionTitle/sectionTitle";
import Button from "../../../reusable/button/button";

const SectionSix = () => {
  return (
    <div className="SectionSix">
      <div className="image_box">
        <div className="duo">
          <img
            src="/imgs/Frame 1110005228.png"
            alt="Man celebrating birthday with kid"
          />
          <img
            src="/imgs/Frame 1000005230 (1).png"
            alt="Man celebrating birthday with kid"
          />
        </div>
        <div className="duo">
          <img
            src="/imgs/Frame 1000005230 (2).png"
            alt="Man celebrating birthday with kid"
          />
          <img
            src="/imgs/Frame 1000005229 (1).png"
            alt="Man celebrating birthday with kid"
          />
        </div>
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
        <Button primary text="Get started" />
      </div>
    </div>
  );
};

export default SectionSix;
