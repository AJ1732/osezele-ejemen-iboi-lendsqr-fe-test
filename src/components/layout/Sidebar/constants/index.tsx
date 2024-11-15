import {
  BadgePercentSVG,
  BankSVG,
  BriefCaseSVG,
  ChartBarSVG,
  ClipboardListSVG,
  CoinsSolidSVG,
  GalaxySVG,
  HandShakeRegularSVG,
  LoanHoldingSVG,
  PiggyBankSVG,
  SackSVG,
  ScrollSVG,
  SlidersHSVG,
  TireSVG,
  TransactionSVG,
  UserCheckSVG,
  UserCogSVG,
  UserFriendsSVG,
  UsersSVG,
  UserTimesSVG,
} from "@/components/svgs";

export const barlinks = [
  {
    title: "customers",
    links: [
      { link: "users", Icon: UserFriendsSVG },
      { link: "guarantors", Icon: UsersSVG },
      { link: "loans", Icon: SackSVG },
      { link: "decision models", Icon: HandShakeRegularSVG },
      { link: "savings", Icon: PiggyBankSVG },
      { link: "loan requests", Icon: LoanHoldingSVG },
      { link: "whitelist", Icon: UserCheckSVG },
      { link: "karma", Icon: UserTimesSVG },
    ],
  },
  {
    title: "businesses",
    links: [
      { link: "organization", Icon: BriefCaseSVG },
      { link: "loan products", Icon: LoanHoldingSVG },
      { link: "savings products", Icon: BankSVG },
      { link: "fees and charges", Icon: CoinsSolidSVG },
      { link: "transactions", Icon: TransactionSVG },
      { link: "services", Icon: GalaxySVG },
      { link: "service account", Icon: UserCogSVG },
      { link: "settlements", Icon: ScrollSVG },
      { link: "reports", Icon: ChartBarSVG },
    ],
  },
  {
    title: "settings",
    links: [
      { link: "preferences", Icon: SlidersHSVG },
      { link: "fees and pricing", Icon: BadgePercentSVG },
      { link: "audit logs", Icon: ClipboardListSVG },
      { link: "systems messages", Icon: TireSVG },
    ],
  },
];
