import NotificationBanner from "../../../components/reusable/notificationBanner/notificationBanner";
import ProgressBar from "../../../components/ui/progressBar/progressBar";

function DashBoard() {
  return (
    <div>
      <NotificationBanner message="Hello Michael" showBanner />
      <ProgressBar fileName="Birthday.jpg" progress={40} size="20 Mb" />
    </div>
  );
}

export default DashBoard;
