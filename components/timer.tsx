"use client";

import { useEffect, useState } from "react";
import { triggerEffect } from "@/lib/utils";
import clsx from "clsx";

const FullScreenTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        playTickSound();
      }, 1000);
    } else if (timeLeft === 0) {
      triggerEffect("red", "/sounds/wrong.mp3");
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);

  const playTickSound = () => {
    const tickAudio = new Audio("/sounds/second.mp3");
    tickAudio.play();
  };
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "m") {
      setIsRunning(true);
    } else if (event.key === "r") {
      setIsRunning(false);
      setTimeLeft(60);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="flex item-center justify-center">
      <div className="text-9xl font-bold text-gray-800">
        {timeLeft > 0 ? timeLeft : "Time's up!"}
      </div>
    </div>
  );
};

export default FullScreenTimer;
