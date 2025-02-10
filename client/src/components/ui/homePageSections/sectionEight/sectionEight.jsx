import "./sectionEight.scss";
import Button from "../../../reusable/button/button";
import { Link } from "react-router-dom";
import SectionTitle from "../../../reusable/sectionTitle/sectionTitle";

const SectionEight = () => {
  return (
    <div className="SectionEight">
      <div className="container">
        <SectionTitle
          title="It’s Easier Now Than Ever Before!"
          subtitle="We Love To Help You Manage "
          centered
          highlighted="Birthdays"
        />
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
            dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
            dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <Button text="Create a reminder now!" primary />
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
