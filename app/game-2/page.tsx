import MiniCards from "@/components/minicard";
import PointCounter from "@/components/point-counter";
import { categories } from "@/lib/data";

export default function Game2Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <MiniCards categories={categories} />
      <PointCounter />
    </div>
  );
}
