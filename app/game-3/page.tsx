import Cards from "@/components/card";
import { questions } from "@/lib/data";

export default function Family100Home() {
  return (
    <div className="p-12 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-[220px] mt-6">Family 100 Pramita</h1>
      <Cards questions={questions} />
    </div>
  );
}
