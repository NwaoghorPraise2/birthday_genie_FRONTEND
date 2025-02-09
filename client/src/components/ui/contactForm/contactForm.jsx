import "./contactForm.scss";
import SectionTitle from "../../reusable/sectionTitle/sectionTitle";
import Input from "../../reusable/input/input";
import Button from "../../reusable/button/button";

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <div className="container">
        <SectionTitle
          centered
          title="We Are Here To Help"
          subtitle="Please get in touch for any concerns with "
          highlighted="Birthdays"
        />
        <form>
          <Input label="Your Name" type="text" placeholder="John Doe" />
          <Input label="Email" type="email" placeholder="john@doe.com" />
          <Input
            label="Phone Number"
            type="text"
            placeholder="+234 00 000 00 000"
          />
          <Input textbox placeholder="Type your message here" rows={10} />
          <Button primary text="Get in touch" fullWidth />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
