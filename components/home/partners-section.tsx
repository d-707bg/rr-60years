"use client";

import Image from "next/image";

const partners = [
  { name: "Община Стара Загора", logo: "/logos/logo1.png" },
  { name: "Регионален образователен управител - Стара Загора", logo: "/logos/logo_2.png" },
  { name: "Университет \"Проф. д-р Асен Златаров\"", logo: "/logos/logo_3.svg" },
  { name: "Тракийски университет", logo: "/logos/logo_4.png" },
  { name: "Фондация \"Ромен Ролан\"", logo: "/logos/logo_5.jpg" },
  { name: "Български фонд за наука", logo: "/logos/logo-6.jpg" },
  { name: "Министерство на образованието", logo: "/logos/logo_7.svg" },
  { name: "Американски университет в България", logo: "/logos/logo_8.jpg" },
  { name: "Асоциация на езиковите гимназии", logo: "/logos/logo_9.png" },
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
            key={partner.name}
            className="flex h-24 items-center justify-center rounded-xl border border-[#164e89]/15 bg-white p-4 transition hover:shadow-md"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={200}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

