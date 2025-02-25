import { useEffect, useState } from "react";
import "./banner.scss";
import PropTypes from "prop-types";

// props, variant can only be default or success, message is the notification message, showBanner state is a boolean, onClose, is a function to close the banner, top is to position the banner better from the top of the screen
function NotificationBanner({
  variant = "default",
  message,
  showBanner = false,
  onClose,
  top = "120px",
}) {
  const [banner, setBanner] = useState("");

  useEffect(() => {
    if (showBanner === true) {
      setBanner("active");
    } else setBanner("hidden");
  }, [showBanner]);

  function handleCloseBanner() {
    setBanner("hidden");
    onClose();
  }
  return (
    <div className={`banner-container ${banner}`}>
      <div
        className={`notif-banner ${variant}  `}
        style={{
          top: top,
        }}
      >
        <p>{message}</p>

        <button className="btn" onClick={handleCloseBanner}>
          <img src="/imgs/x-mark.png" className="" />
        </button>
      </div>
    </div>
  );
}

export default NotificationBanner;

NotificationBanner.propTypes = {
  variant: PropTypes.oneOf(["default", "success"]),
  message: PropTypes.string.isRequired,
  showBanner: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  top: PropTypes.string,
};
