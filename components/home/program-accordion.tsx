import Image from "next/image";

type ProgramEvent = {
  id: number;
  icon: string;
  date: string;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  description: string;
  details: string;
  imageAlt: string;
  actionLabel?: string;
  actionHref?: string;
};

const programEvents: ProgramEvent[] = [
  {
    id: 1,
    icon: "🎶",
    date: "14.04.2026",
    title: "60 ГОДИНИ САМОДЕЙНОСТ - ТРАДИЦИЯТА ПРОДЪЛЖАВА",
    subtitle: "Концерт с участието на настоящи и бивши ученици",
    time: "11:00 - 13:30",
    location: "Културен център „Стара Загора“",
    description:
      "Концерт с участието на настоящи и бивши ученици, който ще отпразнува традицията в културния живот на гимназията.",
    details:
      "Местата са ограничени. Пристигнете 20 минути по-рано за настаняване и регистрация на гостите.",
    imageAlt: "Плейсхолдър снимка за концертното събитие",
  },
  {
    id: 2,
    icon: "📝",
    date: "17.04.2026",
    title: "НАЦИОНАЛНОТО И ОБЩОЧОВЕШКОТО В ЗАВЕТИТЕ НА МЕТОДИЙ КУСЕВ И РОМЕН РОЛАН",
    subtitle: "Национална ученическа конференция в 3 панела",
    time: "9:30 - 16:00",
    location: "Зала „Америка за България“",
    description:
      "Конференция в три панела - научен, литературен и културен - с участие на ученици от цялата страна.",
    details:
      "Участниците трябва да заявят присъствие предварително чрез училищния екип по организация.",
    imageAlt: "Плейсхолдър снимка за ученическа конференция",
  },
  {
    id: 3,
    icon: "🖼️",
    date: "21.04.2026",
    title: "60 ГОДИНИ СВЕТЛИНА И ЦВЕТОВЕ",
    subtitle: "Откриване на юбилейни изложби",
    time: "12:30",
    location: "ГПЧЕ „Ромен Ролан“",
    description:
      "Откриване на изложбите „Светът през вашия обектив“ и „Безкрайност“ с творби на ученици и алумни.",
    details:
      "Изпращайте снимки за участие на 60godinirr@gmail.com до 31.03.2026 г.",
    imageAlt: "Плейсхолдър снимка за изложбите",
  },
  {
    id: 4,
    icon: "🏅",
    date: "22.04.2026",
    title: "60 ГОДИНИ С ПОБЕДА В СЪРЦЕТО - СПОРТЕН ПРАЗНИК",
    subtitle: "Училищен турнир и отборни игри",
    time: "10:00 - 14:00",
    location: "Парк „Артилерийски“",
    description:
      "Футбол, стрийт баскет 3x3, шахмат, канадска борба и „В търсене на съкровището“.",
    details:
      "Носете удобна спортна екипировка и се регистрирайте на място до 9:30 ч.",
    imageAlt: "Плейсхолдър снимка за спортния празник",
  },
  {
    id: 5,
    icon: "📚",
    date: "23.04.2026",
    title: "МАГИЯТА НА СЛОВОТО",
    subtitle: "Представяне на училищните издания",
    time: "12:00",
    location: "Зала „Америка за България“",
    description:
      "Представяне на „Пътеки“, „Репортер RR“ и сп. „ЕГО“ с участието на редакционните екипи.",
    details:
      "Събитието е отворено за всички гости. След официалната част ще има време за въпроси и автографи.",
    imageAlt: "Плейсхолдър снимка за представяне на издания",
  },
  {
    id: 6,
    icon: "🗣️",
    date: "24.04.2026",
    title: "ГОВОРИ RR: СИЛАТА НА ПОКОЛЕНИЯТА",
    subtitle: "Бивши ученици споделят опит",
    time: "16:00 - 20:00",
    location: "Държавен куклен театър",
    description:
      "Среща с вдъхновяващи алумни, които ще споделят професионалния си път и важните уроци от училище.",
    details:
      "Препоръчва се предварителна регистрация за ученици от 11. и 12. клас за участие в дискусионните панели.",
    imageAlt: "Плейсхолдър снимка за среща с алумни",
  },
  {
    id: 7,
    icon: "👩‍🏫",
    date: "25.04.2026",
    title: "ТЪРЖЕСТВЕН ПЕДАГОГИЧЕСКИ СЪВЕТ",
    subtitle: "С бивши и настоящи учители",
    time: "10:00 - 11:00",
    location: "ГПЧЕ „Ромен Ролан“",
    description:
      "Тържествен педагогически съвет с акцент върху приемствеността между поколенията преподаватели.",
    details:
      "Събитието е с покани. За координация на присъствие се свържете с училищната администрация.",
    imageAlt: "Плейсхолдър снимка за педагогически съвет",
  },
  {
    id: 8,
    icon: "🤝",
    date: "25.04.2026",
    title: "СРЕЩА НА ПОКОЛЕНИЯ РОМЕНРОЛАНОВЦИ",
    subtitle: "Общностна среща на алумни и ученици",
    time: "11:00 - 14:00",
    location: "ГПЧЕ „Ромен Ролан“",
    description:
      "Специално време за неформални разговори, снимки, спомени и нови партньорства в училищната общност.",
    details:
      "Отворено събитие за всички випуски. На място ще има информационен щанд за регистрация.",
    imageAlt: "Плейсхолдър снимка за среща на поколения",
  },
  {
    id: 9,
    icon: "🎭",
    date: "25.04.2026",
    title: "ПЪТЕКИ - ПЪТУВАНЕ ПРЕЗ ЦЕННОСТИТЕ НА ЕДНО УЧИЛИЩЕ",
    subtitle: "Спектакъл в 5 действия",
    time: "18:00",
    location: "Държавна опера",
    description:
      "Юбилеен спектакъл в пет действия, посветен на историята, ценностите и общността на ГПЧЕ „Ромен Ролан“.",
    details:
      "Предвижда се предварително резервиране на места. Следете за потвърждение от организационния екип.",
    imageAlt: "Плейсхолдър снимка за спектакъл",
    actionLabel: "Виж повече и вземи билет",
    actionHref: "#",
  },
  {
    id: 10,
    icon: "🍸",
    date: "25.04.2026",
    title: "ПРАЗНИЧЕН КОКТЕЙЛ",
    subtitle: "Официално закриване на юбилейния ден",
    time: "20:00",
    location: "Ресторант LEON",
    description:
      "Финална празнична среща с гости, партньори и представители на училищната общност.",
    details:
      "Достъпът е с предварителен куверт. Свържете се с организаторите за информация за налични места.",
    imageAlt: "Плейсхолдър снимка за празничен коктейл",
    actionLabel: "Виж повече и вземи куверт",
    actionHref: "#",
  },
];

export function ProgramAccordion() {
  return (
    <section
      id="programa"
      className="scroll-mt-32 mt-16 rounded-3xl border border-[#164e89]/15 bg-white p-6 shadow-sm md:p-10"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-[#096fa7]">Програма</p>
        <h2 className="mt-3 text-3xl font-bold text-[#164e89] md:text-4xl">
          Програма на празничните събития
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#164e89]">
          Представяме ви програмата, която ще направи юбилейния месец незабравим и ще
          събере общността на гимназията за празнично честване на 60-годишния път на
          ГПЧЕ „Ромен Ролан“:
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {programEvents.map((event) => (
          <details
            key={event.id}
            className="group rounded-2xl border border-[#164e89]/15 bg-[#fdfdfd] p-5 open:bg-[#f8fbff]"
          >
            <summary className="cursor-pointer list-none">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-xl" aria-hidden>
                    {event.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#096fa7]">{event.date}</p>
                    <h3 className="mt-1 text-base font-bold text-[#164e89] md:text-lg">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#164e89]">{event.subtitle}</p>
                  </div>
                </div>
                <div className="text-sm text-[#164e89] md:text-right">
                  <p>
                    <span className="font-semibold">Час:</span> {event.time}
                  </p>
                  <p>
                    <span className="font-semibold">Място:</span> {event.location}
                  </p>
                  <p className="mt-1 font-semibold text-[#096fa7]">Виж повече -&gt;&gt;</p>
                </div>
              </div>
            </summary>

            <div className="mt-5 grid gap-5 border-t border-[#164e89]/15 pt-5 md:grid-cols-[0.75fr,1fr]">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-[#164e89]/10 bg-[#e6e6e6]">
                <Image src="/img2.jpg" alt={event.imageAlt} fill className="object-cover" />
              </div>

              <div className="space-y-3 text-sm leading-relaxed text-[#164e89]">
                <p>{event.description}</p>
                <p className="rounded-xl bg-[#e6e6e6]/50 p-3 font-medium">{event.details}</p>
                {event.actionLabel && (
                  <a
                    href={event.actionHref}
                    className="inline-flex items-center rounded-md bg-[#096fa7] px-4 py-2 font-semibold text-white transition hover:bg-[#164e89]"
                  >
                    {event.actionLabel}
                  </a>
                )}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

