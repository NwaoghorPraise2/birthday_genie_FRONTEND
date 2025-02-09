import "./newsletter.scss";
import SectionTitle from "../../reusable/sectionTitle/sectionTitle";
import Button from "../../reusable/button/button";
import Input from "../../reusable/input/input";

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <SectionTitle
        centered
        title="Stay Up To Date With Our Newsletter"
        subtitle="We Love To Keep You Updated On "
        highlighted="Birthdays"
      />
      <form className="newsletter_form">
        <Input type="email" placeholder="Enter Your Email Address" />
        <Button text="Subscribe now" primary />
      </form>
    </div>
  );
};

export default Newsletter;
