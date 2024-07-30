import Card from "@/components/card";
import { questions } from "@/lib/data";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">
        Super Family 100 Pramita
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map((question, index) => (
          <Card key={index} question={question} />
        ))}
      </div>
    </section>
  );
}
