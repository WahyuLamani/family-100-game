"use client";
import { triggerEffect } from "@/lib/utils";
import clsx from "clsx";
import { useEffect, useState } from "react";
const OnGame = ({ question }: { question: Question }) => {
  const [errorCount, setErrorCount] = useState(0);
  const [visibleValues, setVisibleValues] = useState<{ [key: number]: string }>(
    {}
  );
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const effect = question.surveys.find(
        (quest) => quest.id.toString() == event.key
      );
      if (event.key === "x") {
        setErrorCount((prevCount) => prevCount + 1);

        triggerEffect("red", "/sounds/wrong.mp3");
      } else if (event.key === "X"){
        triggerEffect("red", "/sounds/wrong.mp3");
      } else if (effect) {
        triggerEffect("green", "/sounds/correct.mp3");
        setVisibleValues((prevVisibleValues) => ({
          ...prevVisibleValues,
          [effect.id]: effect.value,
        }));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div className="mt-6">
      {question.surveys.map((survey) => {
        return (
          <div key={survey.id} className="flex flex-row mb-4">
            <span className="text-1xl font-bold mt-[20px] mr-3">
              {survey.id}
            </span>
            <input
              type="text"
              disabled={true}
              defaultValue={visibleValues[survey.id] || ""}
              className="w-[560px] h-[60px] font-bold text-2xl bg-white text-center border-1 rounded-lg"
            />

            {visibleValues[survey.id] ? (
              <span
                className={clsx("text-3xl text-green-500 font-bold mt-2 ml-5", {
                  hidden: !visibleValues[survey.id],
                })}
              >
                {survey.points}
              </span>
            ) : (
              <p className="text-3xl text-black text-opacity-0 mt-2 ml-5">
                {survey.points}
              </p>
            )}
          </div>
        );
      })}
      <div className="fixed bottom-[100px] right-[150px] text-7xl text-red-500 z-10">
        {Array(errorCount).fill("X").join(" ")}
      </div>
    </div>
  );
};

export default OnGame;
