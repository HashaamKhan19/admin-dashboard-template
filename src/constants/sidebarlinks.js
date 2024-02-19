import { Gauge, UsersRound, MessageCircleWarning } from "lucide-react";

export const sidebarlinks = [
  {
    title: "Dashboard",
    icon: Gauge,
    path: "/",
  },
  {
    title: "Users",
    icon: UsersRound,
    path: "/users",
  },
  {
    title: "Reports",
    icon: MessageCircleWarning,
    path: "/reports",
  },
];
