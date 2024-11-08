import {
  LoanSVG,
  MoneySVG,
  NpUsersSVG,
  UsersGroupSVG,
} from "@/components/svgs";

export const userStats = [
  {
    Icon: NpUsersSVG,
    title: "users",
    figures: "2,453",
    id: "all",
  },
  {
    Icon: UsersGroupSVG,
    title: "active users",
    figures: "2,453",
    id: "active",
  },
  {
    Icon: LoanSVG,
    title: "users with loans",
    figures: "2,453",
    id: "loans",
  },
  {
    Icon: MoneySVG,
    title: "users with savings",
    figures: "2,453",
    id: "savings",
  },
];
