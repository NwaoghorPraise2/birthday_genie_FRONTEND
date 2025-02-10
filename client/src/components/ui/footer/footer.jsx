import { Link } from "react-router-dom";
import Newsletter from "../newsletter/newsletter";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <Newsletter />
        <div className="divider">
          <hr />
        </div>
        <div className="footer_contents">
          <div className="footer_contents_info">
            <div className="item contact">
              <Link className="logo_link" to="/">
                <div className="logo">
                  <img src="/imgs/logo.png" alt="logo" />
                  <span className="title">Birthday</span>
                </div>
              </Link>
              <div className="contact_info">
                <div className="row">
                  <img src="/imgs/email.png" alt="email icon" />
                  <span>
                    <a href="mailto:hello@automusstech.com" target="_blank">
                      hello@automusstech.com
                    </a>
                  </span>
                </div>
                <div className="row">
                  <img src="/imgs/phone.png" alt="phone icon" />
                  <span>
                    <a href="tel:+2347012345678" target="_blank">
                      +23470 1234 5678
                    </a>
                  </span>
                </div>
                <div className="row">
                  <img src="/imgs/location.png" alt="location icon" />
                  <span>
                    <a
                      href="https://maps.app.goo.gl/SUsUEudCSF6pGMsW6"
                      target="_blank"
                    >
                      Somewhere in the World
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="item links">
              <div className="col">
                <span>Home</span>
                <Link to="/">
                  <span>Calendar</span>
                </Link>
                <Link to="/contact">
                  <span>Contact</span>
                </Link>
                <Link to="/">
                  <span>Our FAQ</span>
                </Link>
              </div>
              <div className="col">
                <span>About</span>
                <Link to="/about">
                  <span>Company</span>
                </Link>
                <Link to="/about">
                  <span>Achievements</span>
                </Link>
                <Link to="/about">
                  <span>Our Mission</span>
                </Link>
              </div>
              <div className="col socials">
                <span>Social Profiles</span>
                <div className="icon_list">
                  <a href="https://facebook.com">
                    <div className="icon">
                      <img src="/imgs/facebook.png" alt="facebook icon" />
                    </div>
                  </a>
                  <a href="https://twitter.com">
                    <div className="icon">
                      <img src="/imgs/twitter.png" alt="twitter icon" />
                    </div>
                  </a>
                  <a href="https://linkdein.com">
                    <div className="icon">
                      <img src="/imgs/linkedin.png" alt="linkedin icon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="footer_contents_copyright">
            &copy; 2025 Birthday Genie. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
