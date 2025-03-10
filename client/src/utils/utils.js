import { RiHomeLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiInboxIn } from "react-icons/hi";

import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineAnnotation } from "react-icons/hi";

import { HiOutlineCog } from "react-icons/hi";
import { HiOutlineMicrophone } from "react-icons/hi";

export const formatDateTime = (date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

export const routes = [
  {
    name: "Home",
    route: "/dashboard",
    Icon: RiHomeLine,
  },
  {
    name: "Friends",
    route: "/dashboard/friends",
    Icon: HiOutlineUserGroup,
  },
  {
    name: "Calendar",
    route: "/dashboard/calendar",
    Icon: HiOutlineCalendar,
  },
  {
    name: "Preferences",
    route: "/dashboard/preferences",
    Icon: HiInboxIn,
  },
  {
    name: "Notifications",
    route: "/dashboard/notifications",
    Icon: HiOutlineBell,
  },

  {
    name: "Messages",
    route: "/dashboard/messages",
    Icon: HiOutlineAnnotation,
  },
];

export const extraRoutes = [
  {
    name: "Settings",
    route: "/dashboard/settings",
    Icon: HiOutlineCog,
  },
  {
    name: "Talk to us",
    route: "/dashboard/support",
    Icon: HiOutlineMicrophone,
  },
];

export const dummyNotifications = [
  {
    id: 1,
    type: "success",
    about: "Account Info",
    title: "Account updated successfully",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    createdAt: new Date(5),
  },
  {
    id: 2,
    type: "warning",
    about: "Update Calendar",
    title: "Error updating Calendar",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur sapiente sed",
    createdAt: new Date(1),
  },
  {
    id: 3,
    type: "missed",
    about: "Missed Birthday",
    title: "Missed Birthday Reminder",
    content:
      " illum eum impedit non veritatis! Quaerat explicabo reiciendis impedit quis sunt soluta quam consequuntur",
    createdAt: new Date(),
  },
  {
    id: 4,
    type: "warning",
    title: "New Message",
    about: "New message",
    content:
      "quisquam aperiam consequuntur vitae at eum nostrum itaque, fugiat dolorum ex. Nesciunt.",
    createdAt: new Date(18),
  },

  {
    id: 5,
    type: "warning",
    title: "Birthday celebrated",
    about: "Birthday",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, quod. Quos, aperiam.",
    createdAt: new Date(12),
  },
];
