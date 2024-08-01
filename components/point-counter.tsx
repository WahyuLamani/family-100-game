"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

// const getInitialPoints: () => [number, number, number] = () => {
//   const storedPoints = localStorage.getItem('points');
//   return storedPoints ? JSON.parse(storedPoints) : [0, 0, 0];
// };

const PointCounter = () => {
  const [points, setPoints] = useState([0, 0, 0]);

  useEffect(() => {
    // Load points from localStorage when the component mounts
    const storedPoints = localStorage.getItem("points");
    if (storedPoints) {
      setPoints(JSON.parse(storedPoints));
    }
  }, []);

  useEffect(() => {
    // Save points to localStorage whenever they change
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const handleKeyPress = (event: KeyboardEvent) => {
    switch (event.key) {
      case "i":
        setPoints((prev) => [prev[0] + 10, prev[1], prev[2]]);
        break;
      case "o":
        setPoints((prev) => [prev[0], prev[1] + 10, prev[2]]);
        break;
      case "p":
        setPoints((prev) => [prev[0], prev[1], prev[2] + 10]);
        break;
      case "j":
        setPoints((prev) => [prev[0] - 10, prev[1], prev[2]]);
        break;
      case "k":
        setPoints((prev) => [prev[0], prev[1] - 10, prev[2]]);
        break;
      case "l":
        setPoints((prev) => [prev[0], prev[1], prev[2] - 10]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 flex space-x-4">
      {points.map((point, index) => {
        let teamName: { name: string; class: string } =
          index + 1 == 1
            ? { name: "A", class: "bg-green-500" }
            : index + 1 == 2
            ? { name: "B", class: "bg-yellow-500" }
            : { name: "C", class: "bg-red-500" };
        return (
          <div
            key={index}
            className={clsx(
              "p-4 text-white text-2xl font-bold rounded-md w-50 text-center",
              teamName.class
            )}
          >
            {`Team ${teamName.name} : ${point}`}
          </div>
        );
      })}
    </div>
  );
};

export default PointCounter;
