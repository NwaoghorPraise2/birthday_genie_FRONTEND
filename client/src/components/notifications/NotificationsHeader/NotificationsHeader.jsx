import "./notificationsHeader.scss";
import Button from "../../reusable/button/button";

const NotificationsHeader = () => {
  return (
    <header className="NotificationsHeader">
      <h1>Notifications</h1>
      <Button text="Mark all as read" cornered primary fitContent />
    </header>
  );
};

export default NotificationsHeader;
