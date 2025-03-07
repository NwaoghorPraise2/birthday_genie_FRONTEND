import "./notification.scss";
import NotificationsHeader from "../../../components/notifications/NotificationsHeader/NotificationsHeader";
import MainNotifications from "../../../components/notifications/mainNotifications/mainNotifications";
import BottomBtn from "../../../components/notifications/mainNotifications/BottomBtn";

const Notifications = () => {
  return (
    <div className="notifications">
      <NotificationsHeader />
      <MainNotifications />
      <BottomBtn />
    </div>
  );
};

export default Notifications;
