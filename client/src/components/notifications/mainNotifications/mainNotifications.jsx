import { dummyNotifications, formatDateTime } from "../../../utils/utils";
import "./mainNotifications.scss";
import Button from "../../reusable/button/button";

const MainNotifications = () => {
  return (
    <section className="mainNotification">
      {dummyNotifications.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
      <div className="bottom">
        <Button toUrl="/dashboard/home" text="Back to Dashboard" neutral />
      </div>
    </section>
  );
};

const NotificationItem = ({ item }) => {
  return (
    <div className="notifItem">
      <div className="cancel">
        <button>
          <img src="/imgs/x-mark.png" alt="Cancel image" />
        </button>
      </div>
      <div className="content">
        <div className="meta">
          <span className={`button ${item.type}`}>{item.about}</span>
          <div className="date-not">
            <img src="/imgs/time.png" alt="Time icon" />
            <p>{formatDateTime(item.createdAt).replace(",", "  at")}</p>
          </div>
        </div>
        <div className="info">
          <span className="message-title">{item.title}</span>
          <p className="message-content">{item.content}</p>
          <div className="date-not">
            <img src="/imgs/time.png" alt="Time icon" />
            <p>{formatDateTime(item.createdAt).replace(",", "  at")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNotifications;
