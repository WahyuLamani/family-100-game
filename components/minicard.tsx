"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

const MiniCards = ({ categories }: { categories: GameCategory[] }) => {
  const [clickedCards, setClickedCards] = useState<number[]>([]);

  useEffect(() => {
    const savedClickedCards = JSON.parse(
      localStorage.getItem("clickMiniCard") || "[]"
    );
    setClickedCards(savedClickedCards);
  }, []);

  const handleCardClick = (id: number) => {
    setClickedCards((prev) => {
      const newClickedCards = prev.includes(id) ? prev : [...prev, id];
      localStorage.setItem("clickMiniCard", JSON.stringify(newClickedCards));
      return newClickedCards;
    });
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card
            key={category.id}
            category={category}
            onClick={() => handleCardClick(category.id)}
            isClicked={clickedCards.includes(category.id)}
          />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  category,
  onClick,
  isClicked,
}: {
  category: GameCategory;
  onClick: () => void;
  isClicked: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "text-white shadow-md rounded-lg px-[90px] py-6 w-full cursor-pointer flex items-center justify-center transition-colors duration-300",
        {
          "bg-pink-500 hover:bg-pink-600": !isClicked,
          "bg-gray-500 cursor-not-allowed": isClicked,
        }
      )}
    >
      <span className="font-bold text-xl text-center">{category.name}</span>
    </div>
  );
};

export default MiniCards;
