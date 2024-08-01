import PointCounter from "@/components/point-counter";
import Timer from "@/components/timer";

export default function TimerPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Timer />
      <PointCounter/>
    </div>
  );
}
