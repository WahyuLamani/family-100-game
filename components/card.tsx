import Link from "next/link";
const Card = ({ question }:{question:Question}) => {
  return (
    <>
    <Link href={`/game/${question.id}`} className="flex flex-col items-center justify-center">
      <div className="bg-blue-500 text-white shadow-md rounded-lg px-[90px] py-6 w-full cursor-pointer hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
        <span className="font-bold text-xl mb-2 text-center">{question.id}</span>
      </div>
    </Link>
    </>
  );
};

export default Card;
