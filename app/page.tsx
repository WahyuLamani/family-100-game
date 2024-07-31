import Cards from "@/components/card";
import { questions } from "@/lib/data";

export default function Home() {
  return (
    <div className="p-12 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Super Family 100 Pramita</h1>
      <Cards questions={questions} />
    </div>
  );
}
