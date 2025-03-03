import { Link } from "react-router-dom";
import "./mainNotifications.scss";

function BottomBtn() {
  return (
    <div
      className="
    bottom-container"
    >
      <Link to={"/dashboard/"} className="bottom-btn">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default BottomBtn;
