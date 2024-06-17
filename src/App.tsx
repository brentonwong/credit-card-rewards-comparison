import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import "./App.css";
import Select from "react-select";
import { CARDS } from "./data/cards";
import { CardDetails } from "./components/CardDetails";
import { AnimatedNumber } from "./components/AnimatedNumber";

const App: FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string>("");
  const [annualSpend, setAnnualSpend] = useState<string>("");
  const [comparedAnnualSpend, setComparedAnnualSpend] = useState<number>(0);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [showResults, setShowResults] = useState(false);
  const selectedCard = CARDS.find((c) => c.id === selectedCardId);

  useEffect(() => {
    if (showResults) {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showResults]);

  const onCompareClick = () => {
    // should do some validation on the number
    setComparedAnnualSpend(parseFloat(annualSpend));
    setShowResults(true);
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onAnnualSpendChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnnualSpend(e.target.value);
  };

  return (
    <>
      <div className="w-full min-h-screen py-36 bg-green-100 px-6 flex items-center justify-center">
        <div className="my-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-extrabold leading-tighter mb-6 text-center text-gray-800">
              Credit Card Rewards{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400 block">
                Comparison
              </span>
            </h1>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 text-center leading-normal">
              Enter your annual credit card spending to compare it against all
              our known credit cards and find your breakeven point.
            </p>
          </div>
          <div className="max-w-lg mx-auto flex flex-col gap-4">
            <div className="relative w-full">
              <span className="absolute t-0 b-0 h-full w-8 left-0 text-center justify-center items-center flex font-bold text-lg">
                $
              </span>
              <input
                id="income"
                type="text"
                inputMode="decimal"
                step="any"
                placeholder="Insert annual credit card spend"
                className="h-[50px] rounded pl-8 pr-4 w-full"
                onChange={onAnnualSpendChange}
                value={annualSpend}
              />
            </div>
            <div>
              <Select
                value={
                  selectedCard
                    ? { value: selectedCard.id, label: selectedCard.name }
                    : null
                }
                onChange={(value) => setSelectedCardId(value?.value ?? "")}
                placeholder="Select your current card"
                styles={{
                  control: (provided, _) => ({
                    ...provided,
                    height: 50,
                  }),
                }}
                options={CARDS.map((card) => ({
                  value: card.id,
                  label: card.name,
                }))}
                formatOptionLabel={({ value, label }) => {
                  const film = CARDS.find((film) => film.id === value);
                  return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {film ? (
                        <img
                          src={film?.image}
                          alt={value}
                          style={{
                            marginRight: "8px",
                            width: "40",
                            height: "26px",
                            objectFit: "contain",
                          }}
                        />
                      ) : null}
                      {label}
                    </div>
                  );
                }}
              />
            </div>
            <button
              className="bg-green-800 text-white px-10 h-[50px] rounded"
              onClick={onCompareClick}
            >
              Compare
            </button>
          </div>
        </div>
      </div>
      {showResults && (
        <div className="w-full py-36 px-6" ref={resultsRef}>
          <div className="max-w-6xl mx-auto flex flex-row flex-wrap gap-8 mb-16">
            <div className="w-full">
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
                What you've told us
              </h2>
              <p className="text-center">
                Below are the figures used for the calculations.
              </p>
            </div>
            <div className="flex justify-center gap-8 w-full text-center my-8">
              <div className="w-[300px] h-[300px] rounded-md w-full border-solid border shadow-lg p-4 flex flex-col items-center justify-center">
                <div>
                  <h3 className="font-bold">Monthly Spend</h3>
                  <div className="text-4xl font-bold my-4">
                    $
                    <AnimatedNumber
                      className="inline"
                      value={comparedAnnualSpend / 12}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[300px] h-[300px] rounded-md w-full border-solid border shadow-lg p-4 flex flex-col items-center justify-center">
                <h3 className="font-bold">Annual Spend</h3>
                <div className="text-4xl font-bold my-4">
                  $
                  <AnimatedNumber
                    className="inline"
                    value={comparedAnnualSpend}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            {selectedCard && (
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Current Card
                </h2>
                <CardDetails
                  annualSpend={comparedAnnualSpend}
                  card={selectedCard}
                  displayCard
                />
              </div>
            )}

            <h2 className="text-4xl font-bold text-gray-800">
              {selectedCard ? "Other Cards" : "Cards"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {CARDS.filter(
                (c) =>
                  c.id !== selectedCardId &&
                  c.rewardOptions.some((r) => r.dollarValue !== 0)
              ).map((card) => (
                <CardDetails
                  annualSpend={comparedAnnualSpend}
                  card={card}
                  key={card.id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
