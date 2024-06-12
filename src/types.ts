export type Card = {
  id: string;
  name: string;
  image?: string;
  annualFee: number;
  minimumLimit: number;
  rewardRate: number;
  rewardRateRules?: RewardRule[];
  link?: string;
  tags: CardTag[];
};

export type RewardRule = {
  min: number;
  max: number;
  rate: number;
  period: "monthly" | "annual";
};

export type CardProvider = "ANZ" | "TSB";

export type CardTag = "airpoints" | "cashback" | "hot-points";
