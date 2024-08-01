"use client"
import Link from "next/link";
import React, { useState, useEffect } from 'react'

export default function Cards({questions}:{questions:Question[]}) {
  const [clickedCards, setClickedCards] = useState<number[]>([]);

  useEffect(() => {
    const savedClickedCards = JSON.parse(localStorage.getItem('clickedCards') || '[]');
    setClickedCards(savedClickedCards);
  }, []);

  const handleCardClick = (id: number) => {
    setClickedCards(prev => {
      const newClickedCards = [...prev, id];
      localStorage.setItem('clickedCards', JSON.stringify(newClickedCards));
      return newClickedCards;
    });
  };
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map((question, index) => (
          <Card key={index} question={question}  onClick={() => handleCardClick(question.id)}
          isClicked={clickedCards.includes(question.id)} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ question,onClick, isClicked }:{question:Question,onClick:()=>void,isClicked:boolean}) => {
  return (
    <>
    {isClicked ? (
        <div className="bg-gray-500 text-white shadow-md rounded-lg px-[90px] py-6 w-full cursor-not-allowed flex items-center justify-center">
          <span className="font-bold text-4xl mb-2 text-center">{question.category}</span>
        </div>
      ) : (
        <Link href={`game-3/game/${question.id}`} onClick={onClick} className="flex flex-col items-center justify-center">
          <div className="bg-blue-500 text-white shadow-md rounded-lg px-[90px] py-6 w-full cursor-pointer hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
            <span className="font-bold text-3xl mb-2 text-center">{question.category}</span>
          </div>
        </Link>
      )}
    </>
  );
};

