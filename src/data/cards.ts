import { Card } from "../types";
import images from "../assets/images";

export const CARDS: Card[] = [
  // AMEX
  {
    id: "amex-airpoints",
    name: "American Express Airpoints",
    image: images["amex-airpoints.png"],
    annualFee: 0,
    minimumLimit: 0,
    rewardRate: 1 / 100,
    link: "https://www.americanexpress.com/nz/credit-cards/airnz-base-credit-card/?linknav=nz-amex-cardshop-recommended-airpoints",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "airpoints",
        dollarValue: 1,
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 1 / 100,
          },
        ],
      },
    ],
  },
  {
    id: "amex-airpoints-platinum",
    name: "American Express Airpoints Platinum",
    image: images["amex-airpoints-platinum.png"],
    annualFee: 195,
    minimumLimit: 0,
    rewardRate: 1 / 59,
    link: "https://www.americanexpress.com/nz/credit-cards/airpoints-cards/airpoints-platinum-card/?linknav=nz-amex-cardshop-recommended-airpointsplat",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "airpoints",
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 1 / 59,
          },
        ],
        dollarValue: 1,
      },
    ],
  },
  {
    id: "amex-gold",
    name: "American Express Gold Rewards Card",
    image: images["amex-gold.png"],
    annualFee: 200,
    minimumLimit: 0,
    rewardRate: 2 / 1,
    link: "https://www.americanexpress.com/nz/credit-cards/gold-credit-card/",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "points",
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 2 / 1,
          },
        ],
        dollarValue: 0.16,
      },
    ],
  },

  // ANZ Cards

  {
    id: "anz-low-rate-visa",
    name: "ANZ Low Rate Visa",
    image: images["anz-low-rate-visa.png"],
    annualFee: 0,
    minimumLimit: 500,
    rewardRate: 0,
    link: "https://www.anz.co.nz/personal/credit-cards/low-rate-visa/",
    tags: [],
    rewardOptions: [],
  },
  {
    id: "anz-airpoints-visa",
    name: "ANZ Airpoints Visa",
    image: images["anz-airpoints-visa.png"],
    annualFee: 65,
    minimumLimit: 500,
    rewardRate: 1 / 175,
    link: "https://www.anz.co.nz/personal/credit-cards/airpoints-visa/",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "airpoints",
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 1 / 175,
          },
        ],
        dollarValue: 1,
      },
    ],
  },
  {
    id: "anz-airpoints-visa-platinum",
    name: "ANZ Airpoints Visa Platinum",
    image: images["anz-airpoints-visa-platinum.png"],
    annualFee: 150,
    minimumLimit: 8000,
    rewardRate: 1 / 110,
    link: "https://www.anz.co.nz/personal/credit-cards/airpoints-visa-platinum/",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "airpoints",
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 1 / 110,
          },
        ],
        dollarValue: 1,
      },
    ],
  },
  {
    id: "anz-cash-back-visa",
    name: "ANZ CashBack Visa",
    image: images["anz-cash-back-visa.png"],
    annualFee: 40,
    minimumLimit: 500,
    rewardRate: 1 / 150,
    link: "https://www.anz.co.nz/personal/credit-cards/cashback-visa/",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "cashback",
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 1 / 150,
          },
        ],
        dollarValue: 1,
      },
    ],
  },
  {
    id: "anz-cash-back-visa-platinum",
    name: "ANZ CashBack Visa Platinum",
    image: images["anz-cash-back-visa-platinum.png"],
    annualFee: 80,
    minimumLimit: 8000,
    rewardRate: 1 / 120,
    link: "https://www.anz.co.nz/personal/credit-cards/cashback-platinum/",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "cashback",
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 1 / 120,
          },
        ],
        dollarValue: 1,
      },
    ],
  },

  // ASB
  {
    id: "asb-visa-lite",
    name: "ASB Visa Lite",
    image: images["asb-visa-lite.png"],
    annualFee: 0,
    minimumLimit: 0,
    rewardRate: 0,
    link: "https://www.asb.co.nz/credit-cards/visa-light.html",
    tags: [],
    rewardOptions: [],
  },
  {
    id: "asb-visa-rewards",
    name: "ASB Visa Rewards",
    image: images["asb-visa-rewards.png"],
    annualFee: 40,
    minimumLimit: 0,
    rewardRate: 1 / 150,
    link: "https://www.asb.co.nz/credit-cards/visa-rewards.html",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "true-rewards",
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 1 / 150,
          },
        ],
        dollarValue: 1,
      },
    ],
  },
  {
    id: "asb-visa-platinum-rewards",
    name: "ASB Visa Platinum Rewards",
    image: images["asb-visa-platinum-rewards.png"],
    annualFee: 80,
    minimumLimit: 8000,
    rewardRate: 1 / 100,
    link: "https://www.asb.co.nz/credit-cards/visa-platinum-rewards.html",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "true-rewards",
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 1 / 100,
          },
        ],
        dollarValue: 1,
      },
    ],
  },

  // TSB
  {
    id: "tsb-debit-mastercard",
    name: "TSB Debit Mastercard",
    image: images["tsb-debit-mastercard.png"],
    annualFee: 0,
    minimumLimit: 0,
    rewardRate: 0,
    link: "https://www.tsb.co.nz/cards/debit-mastercard",
    tags: [],
    rewardOptions: [],
  },
  {
    id: "tsb-low-rate-mastercard",
    name: "TSB Low Rate Mastercard",
    image: images["tsb-low-rate-mastercard.png"],
    annualFee: 20,
    minimumLimit: 500,
    rewardRate: 0,
    link: "https://www.tsb.co.nz/cards/low-rate-mastercard",
    tags: [],
    rewardOptions: [],
  },
  {
    id: "tsb-platinum-mastercard",
    name: "TSB Platinum Mastercard",
    image: images["tsb-platinum-mastercard.png"],
    annualFee: 90,
    minimumLimit: 8000,
    rewardRate: 1 / 100,
    link: "https://www.tsb.co.nz/cards/platinum-mastercard",
    tags: [],
    rewardOptions: [
      {
        period: "annual",
        currency: "cashback",
        rules: [
          {
            min: 0,
            max: Infinity,
            rate: 1 / 100,
          },
        ],
        dollarValue: 1,
      },
    ],
  },

  // Westpac

  {
    id: "westpac-fee-free-mastercard",
    name: "Westpac Fee Free Mastercard",
    image: images["westpac-fee-free-mastercard.png"],
    annualFee: 0,
    minimumLimit: 0,
    rewardRate: 0,
    link: "https://www.westpac.co.nz/credit-cards/fee-free-card/",
    tags: [],
    rewardOptions: [],
  },
  {
    id: "westpac-airpoints-mastercard",
    name: "Westpac Airpoints Mastercard",
    image: images["westpac-airpoints-mastercard.png"],
    annualFee: 70,
    minimumLimit: 0,
    rewardRate: 1 / 150,
    rewardOptions: [
      {
        period: "monthly",
        currency: "cashback",
        dollarValue: 1,
        rules: [
          {
            max: 3500,
            min: 0,
            rate: 1 / 150,
          },
          {
            max: Infinity,
            min: 3500,
            rate: 1 / 300,
          },
        ],
      },
    ],
    rewardRateRules: [
      {
        max: 3500,
        min: 0,
        rate: 1 / 150,
        period: "monthly",
      },
      {
        max: Infinity,
        min: 3500,
        rate: 1 / 300,
        period: "monthly",
      },
    ],
    link: "https://www.westpac.co.nz/credit-cards/airpoints/westpac-airpoints-mastercard/",
    tags: [],
  },
  {
    id: "westpac-airpoints-platinum-mastercard",
    name: "Westpac Airpoints Platinum Mastercard",
    image: images["westpac-airpoints-platinum-mastercard.png"],
    annualFee: 125,
    minimumLimit: 0,
    rewardRate: 1 / 110,
    rewardRateRules: [
      {
        max: 7000,
        min: 0,
        rate: 1 / 110,
        period: "monthly",
      },
      {
        max: Infinity,
        min: 7000,
        rate: 1 / 220,
        period: "monthly",
      },
    ],
    rewardOptions: [
      {
        period: "monthly",
        currency: "cashback",
        dollarValue: 1,
        rules: [
          {
            max: 7000,
            min: 0,
            rate: 1 / 110,
          },
          {
            max: Infinity,
            min: 7000,
            rate: 1 / 220,
          },
        ],
      },
    ],
    link: "https://www.westpac.co.nz/credit-cards/airpoints/westpac-airpoints-platinum-mastercard/",
    tags: [],
  },
  {
    id: "westpac-airpoints-world-mastercard",
    name: "Westpac Airpoints World Mastercard",
    image: images["westpac-airpoints-world-mastercard.png"],
    annualFee: 310,
    minimumLimit: 0,
    rewardRate: 1 / 95,
    rewardOptions: [
      {
        period: "monthly",
        currency: "airpoints",
        dollarValue: 1,
        rules: [
          {
            max: 15000,
            min: 0,
            rate: 1 / 95,
          },
          {
            max: Infinity,
            min: 15000,
            rate: 1 / 190,
          },
        ],
      },
    ],
    rewardRateRules: [
      {
        max: 15000,
        min: 0,
        rate: 1 / 95,
        period: "monthly",
      },
      {
        max: Infinity,
        min: 15000,
        rate: 1 / 190,
        period: "monthly",
      },
    ],
    link: "https://www.westpac.co.nz/credit-cards/airpoints/westpac-airpoints-world-mastercard/",
    tags: [],
  },
];
