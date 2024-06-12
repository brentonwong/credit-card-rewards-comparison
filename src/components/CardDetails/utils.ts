import { Card, RewardRule } from "../../types";

export const isRewardEligible = (card: Card): boolean => {
  return card.rewardRate > 0;
};

export const toRewardPercentage = (card: Card): number => {
  return card.rewardRate * 100;
};

export const toRewardRulesDescription = (rule: RewardRule): string => {
  if (rule.max === Infinity) return `$${rule.min}+`;
  return `$${rule.min}-${rule.max}`;
};

export const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  });
  return formatter.format(value);
};

export const getRewardsAfterAnnualFee = (card: Card, value: number) => {
  // assume these are monthly rules for now
  if (card.rewardRateRules) {
    let monthlyRewards = 0;
    let remainingSpending = value / 12;
    for (const rule of card.rewardRateRules) {
      if (remainingSpending > 0) {
        // Calculate the amount applicable for this rule
        const applicableAmount = Math.min(
          rule.max - rule.min,
          remainingSpending
        );
        // Calculate rewards for the applicable amount
        monthlyRewards += applicableAmount * rule.rate;
        // Subtract the applicable amount from the remaining spending
        remainingSpending -= applicableAmount;
      }
    }
    return monthlyRewards * 12 - card.annualFee;
  }

  return value * card.rewardRate - card.annualFee;
};
