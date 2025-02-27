import { RiHomeLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiInboxIn } from "react-icons/hi";

import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineAnnotation } from "react-icons/hi";

import { HiOutlineCog } from "react-icons/hi";
import { HiOutlineMicrophone } from "react-icons/hi";

export const routes = [
  {
    name: "Home",
    route: "/dashboard/",
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
