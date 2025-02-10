import "./sectionOne.scss";
import SectionTitle from "../../../reusable/sectionTitle/sectionTitle";
import Button from "../../../reusable/button/button";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <div className="SectionOne">
      <div className="text_box">
        <SectionTitle
          title="Birthday Solutions"
          subtitle="Effective Birthday Management System"
        />
        <p>
          We’re dedicated to making your connections and loved ones feel
          celebrated and cherished. We simplify the process of remembering and
          honouring birthdays by allowing you to effortlessly manage important
          dates and send thoughtful messages. With personalised messaging,
          WhatsApp reminders, and seamless calendar integration, we ensure you
          never miss a moment to make someone’s day special.
        </p>
        <p>
          Looking to go the extra mile? Our gift suggestions, complete with
          direct vendor links, help you find the perfect present with ease.
          Customise notifications, delivery times, and more to create a truly
          personalised experience. At the heart of it all, we’re here to help
          you strengthen your connections and spread joy.
        </p>
        <Button primary text="Try Us Today!" />
      </div>
      <div className="calendar_box">
        <img src="/imgs/Image.png" alt="Girl celebrating birthday" />
        <div className="form_box">
          <h4>Simply Integrate Your Calendar</h4>
          <p>
            Integrate your calendar and we will ensure you never miss a moment
            to make someone’s day special.
          </p>
          <Link to="">
            <div className="calendar_widget">
              <span>Integrate your calendar</span>
              <div className="icon">
                <img src="/imgs/Icon.png" alt="arrow forward icon" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
