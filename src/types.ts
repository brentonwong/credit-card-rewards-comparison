export type Card = {
  id: string;
  name: string;
  image?: string;
  annualFee: number;
  minimumLimit: number;
  rewardRate: number;
  rewardRateRules?: RewardRule[];
  rewardOptions: RewardOption[];
  link?: string;
  tags: string[];
};

export type RewardRule = {
  min: number;
  max: number;
  rate: number;
  period: "monthly" | "annual";
};

export type RewardOption = {
  currency: RewardCurrency;
  period: "monthly" | "annual"; // annual denotes we use the full balance
  rules: Omit<RewardRule, "period">[];
  dollarValue: number;
};

export type CardProvider = "ANZ" | "TSB";

export type RewardCurrency =
  | "airpoints"
  | "cashback"
  | "hot-points"
  | "true-rewards"
  | "points";
