import KpiCard from "./KpiCard";

export default function KpiCardsGrid({ cards }: { cards: { title: string; content: string }[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <KpiCard key={i} {...card} />
      ))}
    </section>
  );
}