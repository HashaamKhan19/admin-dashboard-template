import { UsersRound, Network, Bug } from "lucide-react";

export const dashboardStats = [
  {
    id: 1,
    title: "Total Users",
    value: 69420,
    icon: UsersRound,
    percentage: 69,
    increase: true,
  },
  {
    id: 2,
    title: "Total Communities",
    value: 420,
    icon: Network,
    percentage: 12,
    increase: false,
  },
  {
    id: 3,
    title: "Bugs Reported",
    value: 6969,
    icon: Bug,
    percentage: 20,
    increase: true,
  },
];
