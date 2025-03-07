import { dummyNotifications, formatDateTime } from "../../../utils/utils";
import "./mainNotifications.scss";
const MainNotifications = () => {
  return (
    <section className="mainNotification">
      {dummyNotifications.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
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
      <div className="main-not">
        <div>
          <span className={`button ${item.type}`}>{item.about}</span>
        </div>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
        <p className="date">
          {formatDateTime(item.createdAt).replace(",", "  at")}
        </p>
      </div>
      <div className="date-not">
        <img src="/imgs/time.png" alt="Time icon" />
        <p>{formatDateTime(item.createdAt).replace(",", "  at")}</p>
      </div>
    </div>
  );
};

export default MainNotifications;
