import "./sectionSeven.scss";
import Button from "../../../reusable/button/button";
import { Link } from "react-router-dom";

const SectionSeven = () => {
  return (
    <div className="SectionSeven">
      <hr />
      <div className="container">
        <div className="card">
          <p>Number of birthdays celebrated</p>
          <h2>
            24k<span>/day</span>
          </h2>
          <p>
            <Link to="/contact">Still in doubt?</Link>
          </p>
        </div>
        <div className="card">
          <p>Number of Happy Users</p>
          <h2>65k</h2>
          <Button primary toUrl="auth/signup" text="Join us today" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SectionSeven;
