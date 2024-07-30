import Link from "next/link";
const Card = ({ question,onClick, isClicked }:{question:Question,onClick:()=>void,isClicked:boolean}) => {
  return (
    <>
    {isClicked ? (
        <div className="bg-gray-500 text-white shadow-md rounded-lg px-[90px] py-6 w-full cursor-not-allowed flex items-center justify-center">
          <span className="font-bold text-3xl mb-2 text-center">{question.id}</span>
        </div>
      ) : (
        <Link href={`/game/${question.id}`} onClick={onClick} className="flex flex-col items-center justify-center">
          <div className="bg-blue-500 text-white shadow-md rounded-lg px-[90px] py-6 w-full cursor-pointer hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
            <span className="font-bold text-3xl mb-2 text-center">{question.id}</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
