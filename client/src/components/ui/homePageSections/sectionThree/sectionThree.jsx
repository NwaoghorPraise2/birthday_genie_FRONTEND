import "./sectionThree.scss";
import SectionTitle from "../../../reusable/sectionTitle/sectionTitle";
import Button from "../../../reusable/button/button";

const SectionThree = () => {
  return (
    <div className="SectionThree">
      <div className="text_box">
        <div className="confetti">
          <img src="/imgs/Confetti.png" alt="confetti" />
        </div>
        <SectionTitle
          title="Quick Messages"
          subtitle="With Ai Suggestions For The Celebrants"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur. Lorem isit amet consectetur. Lorem ipsum dolor sit amet
          consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
          sit amet consectetur.
        </p>
        <Button primary text="Try this feature now!" />
      </div>
      <div className="image_box">
        <img src="/imgs/Image Box.png" alt="Ai Chat with robot and card" />
      </div>
    </div>
  );
};

export default SectionThree;
