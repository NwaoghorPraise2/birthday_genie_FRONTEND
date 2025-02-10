import "./sectionTwo.scss";
import SectionTitle from "../../../reusable/sectionTitle/sectionTitle";
import Button from "../../../reusable/button/button";

const SectionTwo = () => {
  return (
    <div className="SectionTwo">
      <div className="container">
        <SectionTitle
          title="Keep Birthdays At Your Finger Tips"
          subtitle="Never Forget "
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
          <div className="features_list">
            <div className="feature_item">
              <div className="icon">
                <img src="/imgs/calendar-lines-alt.png" alt="Calendar icon" />
              </div>
              <span className="caption">Sync with your calendar</span>
            </div>
            <div className="feature_item">
              <div className="icon">
                <img src="/imgs/party-bell.png" alt="Party Bell icon" />
              </div>
              <span className="caption">Get birthday notification</span>
            </div>
            <div className="feature_item">
              <div className="icon">
                <img src="/imgs/satellite-dish.png" alt="Satellite icon" />
              </div>
              <span className="caption">AI suggestions/ messages</span>
            </div>
            <div className="feature_item">
              <div className="icon">
                <img src="/imgs/whatsapp.png" alt="WhatsApp icon" />
              </div>
              <span className="caption">Send on WhatsApp</span>
            </div>
          </div>
          <Button text="Create a reminder now!" primary />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
