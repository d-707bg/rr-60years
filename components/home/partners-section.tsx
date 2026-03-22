const partners = [
  "Лого партньор 1",
  "Лого партньор 2",
  "Лого партньор 3",
  "Лого партньор 4",
  "Лого партньор 5",
  "Лого партньор 6",
];

export function PartnersSection() {
  return (
    <section className="mt-16 rounded-3xl border border-[#164e89]/15 bg-white p-6 shadow-sm md:p-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#164e89] md:text-4xl">Партньори на събитието</h2>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <div
            key={partner}
            className="flex h-24 items-center justify-center rounded-xl border border-dashed border-[#164e89]/30 bg-[#e6e6e6]/55 text-sm font-semibold text-[#164e89]"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}

