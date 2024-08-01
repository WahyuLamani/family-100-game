import PointCounter from "@/components/point-counter";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="p-12 flex flex-wrap gap-3 items-center justify-center h-screen">
      <Link
        href={`/game-1`}
        className="text-2xl w-[300px] font-bold px-10 py-6 bg-blue-500 text-white rounded-full"
      >
        Game pertama
      </Link>
      <Link
        href={`#`}
        className="text-2xl w-[300px] font-bold px-10 py-6 bg-blue-500 text-white rounded-full"
      >
        Game kedua
      </Link>
      <Link
        href={`/game-3`}
        className="text-2xl w-[300px] font-bold px-10 py-6 bg-purple-500 text-white rounded-full"
      >
        Game Final
      </Link>
    </div>
    <PointCounter/>
    </>
  );
}
