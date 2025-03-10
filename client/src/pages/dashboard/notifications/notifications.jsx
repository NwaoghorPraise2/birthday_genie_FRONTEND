import "./notifications.scss";
import NotificationsHeader from "../../../components/notifications/NotificationsHeader/NotificationsHeader";
import MainNotifications from "../../../components/notifications/mainNotifications/mainNotifications";

const Notifications = () => {
  return (
    <div className="notifications">
      <NotificationsHeader />
      <MainNotifications />
    </div>
  );
};

export default Notifications;
