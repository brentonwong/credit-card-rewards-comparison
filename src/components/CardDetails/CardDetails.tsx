import { FC } from "react";
import { Card } from "../../types";
import classNames from "classnames";
import {
  formatCurrency,
  getRewardsAfterAnnualFee,
  isRewardEligible,
  toPeriodSymbol,
  toRewardPercentage,
  toRewardRulesDescription,
} from "./utils";

type Props = {
  annualSpend: number;
  card: Card;
  displayCard?: boolean;
};

export const CardDetails: FC<Props> = ({ annualSpend, card, displayCard }) => {
  const rewardAfterFees = getRewardsAfterAnnualFee(card, annualSpend);

  return (
    <div
      className={classNames(
        "p-4 md:p-8 rounded-md w-full border-solid border shadow-lg grid grid-cols-1 gap-4 md:gap-8 grid-rows-[auto,1fr,auto,auto]",
        {
          "md:grid-cols-4 md:grid-flow-row md:auto-rows-min md:gap-y-4":
            displayCard,
          "bg-blue-100":
            !displayCard && card.rewardRate === 0 && card.annualFee === 0,
        }
      )}
    >
      <div
        className={classNames({
          "md:row-span-2": displayCard,
        })}
      >
        <img
          src={card.image}
          className="w-full h-auto mx-auto max-w-[200px] lg:max-w-[400px]"
        />
      </div>
      <div
        className={classNames({
          "md:col-span-3": displayCard,
        })}
      >
        <h3 className="font-bold text-xl uppercase tracking-wide mb-3">
          <a
            href={card.link}
            rel="nofollow"
            target="_blank"
            className="hover:underline"
          >
            {card.name}
          </a>
        </h3>
        <div>
          <div className="grid grid-cols-[100px_minmax(0,_1fr)] gap-y-1 text-sm">
            <div className="font-bold">Annual Fee</div>
            <div>${card.annualFee}</div>
            {isRewardEligible(card) && (
              <>
                <div className="font-bold">Reward Rate</div>
                <div>
                  {!card.rewardRateRules &&
                    toRewardPercentage(card).toFixed(2) + "%"}
                  {card.rewardRateRules?.map((rule) => (
                    <>
                      {(rule.rate * 100).toFixed(2) + "%"} |{" "}
                      {toRewardRulesDescription(rule)}
                      <em>{toPeriodSymbol(rule.period)}</em>
                      <br />
                    </>
                  ))}
                </div>
                <div className="font-bold">Breakeven</div>
                <div>${(card.annualFee / card.rewardRate).toFixed(2)}</div>
              </>
            )}
          </div>
        </div>
      </div>
      {isRewardEligible(card) && (
        <>
          <div
            className={classNames(
              "text-center border border-solid rounded-lg p-3",
              {
                "border-red-400 bg-red-100": rewardAfterFees < 0,
                "border-blue-400 bg-blue-100": rewardAfterFees === 0,
                "border-green-400 bg-green-100": rewardAfterFees > 0,
                "md:col-span-4": displayCard,
              }
            )}
          >
            You {!displayCard && "would "}have earned{" "}
            <strong>{formatCurrency(rewardAfterFees)}</strong> after the card
            fee.
            {card.rewardRateRules && (
              <span className="block text-xs my-2">
                Since this card has multi-tier reward rules per month, we have
                used your monthly spend to estimate your rewards.
              </span>
            )}
          </div>
        </>
      )}
      {card.link && (
        <div className={classNames("w-full", { "md:col-span-4": displayCard })}>
          <a
            target="_blank"
            href={card.link}
            rel="nofollow"
            className="w-full bg-blue-800 block text-center text-white rounded py-4"
          >
            View Website
          </a>
        </div>
      )}
    </div>
  );
};
