import Image from "next/image";

const paragraphs = [
  "Скъпи роменролановци, учители, родители и приятели на училището, С гордост и радост посрещаме нашия 60-ти юбилей - повод за празнуване, но и за размисъл. Шест десетилетия нашето училище е символ на знание, култура и дух, а всеки един от вас е важна част от тази невероятна история.",
  "ГПЧЕ „Ромен Ролан“ не е само място, където учим езици - това е място, което отваря врати към света. Място, което формира личността и изгражда бъдещя светоглед на младите хора. Благодарение на усилията и отдадеността на нашите ученици, учители и партньори, училището се утвърди като символ на академичен успех, професионализъм и лидерски потенциал.",
  "През тези 60 години заедно създадохме традиции, които ще продължават да вдъхновяват бъдещите поколения. Благодаря на всички, които през годините вложиха усилия и сърце в развитието на нашето училище. Това е празник за всички нас!",
  "Нека юбилейната година бъде изпълнена с много емоции и нови възможности за всеки един, който е пряко или косвено свързан с гимназията. Защото „Ромен Ролан“ не е просто училище, а общност от мотивирани лидери, водещи и допринасящи за развитието на нашето общество.",
];

export function DirectorMessageSection() {
  return (
    <section className="mt-16 flex flex-col gap-8 md:flex-row md:gap-10">
      <figure className="flex-shrink-0 w-full max-w-sm">
        <div className="overflow-hidden rounded-2xl border border-[#164e89]/20 bg-white">
          <Image
            src="/nikolova.jpg"
            alt="Теодора Николова, директор на ГПЧЕ Ромен Ролан"
            width={600}
            height={760}
            className="h-auto w-full object-cover"
          />
          <figcaption className="border-t border-[#164e89]/10 bg-[#e6e6e6]/50 px-4 py-3 text-[#164e89]">
            <p className="text-sm font-semibold">Теодора Николова</p>
            <p className="text-xs">Директор на ГПЧЕ „Ромен Ролан“</p>
          </figcaption>
        </div>
      </figure>

      <div className="flex-1 space-y-5 text-[#164e89]">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">Обръщение на директора</h2>

        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed text-[#1e3a5f]">
              {index === 0 ? (
                <>
                  <span className="font-semibold text-[#096fa7]">Скъпи роменролановци,</span>{" "}
                  {paragraph.replace("Скъпи роменролановци, ", "")}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}

          <div className="inline-block rounded-lg border border-[#096fa7]/30 bg-[#e6e6e6]/70 px-4 py-2">
            <p className="text-sm font-semibold text-[#096fa7]">
              С уважение, Теодора Николова, Директор на ГПЧЕ „Ромен Ролан“
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

