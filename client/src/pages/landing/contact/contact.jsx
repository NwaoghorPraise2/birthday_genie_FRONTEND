import PageBanner from "../../../components/reusable/pageBanner/pageBanner";
import ContactForm from "../../../components/ui/contactForm/contactForm";
import "./contact.scss";

const images = [
  "/imgs/mini_3.jpg", 
  "/imgs/mini_9.jpg", 
  "/imgs/mini_2.jpg", 
  "/imgs/mini_5.jpg", 
  "/imgs/mini_8.jpg", 
  "/imgs/mini_7.jpg", 
  "/imgs/mini_4.jpg", 
  "/imgs/mini_1.jpg", 
  "/imgs/mini_6.jpg", 
]

const Contact = () => {
  return (
    <div className="Contact">
      <PageBanner
        text="Contact us"
        mainImg="/imgs/Hero Image Contact.png"
        miniImgs={images}
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
