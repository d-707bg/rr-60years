
import { ChevronDown, ChevronUp } from "lucide-react";

type ProgramEvent = {
  id: number;
  icon: string;
  date: string;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  description: string;
  details: string[];
  actionLabel?: string;
  actionHref?: string;
};

const programEvents: ProgramEvent[] = [
  {
    id: 1,
    icon: "🎶",
    date: "14.04",
    title: "60 ГОДИНИ САМОДЕЙНОСТ - ТРАДИЦИЯТА ПРОДЪЛЖАВА",
    subtitle: "Концерт с участието на настоящи и бивши ученици",
    time: "11:00 - 13:30",
    location: "Културен център „Стара Загора“",
    description:
      "Концерт с участието на настоящи и бивши ученици на ГПЧЕ „Ромен Ролан“, който ще отпразнува традицията на училището в културния и артистичния живот на Стара Загора. Ще бъдат представени различни музикални и театрални изпълнения, които ще ни потопят в духа на училището и неговото наследство. Това е не само повод за празник, но и за демонстриране на таланта и отдадеността на всички роменролановци през годините.",
    details: [
      "След като кликнете на събитието, блокчето се разгъва и показва пълната информация за участие и организация.",
    ],
  },
  {
    id: 2,
    icon: "📝",
    date: "17.04",
    title: "НАЦИОНАЛНОТО И ОБЩОЧОВЕШКОТО В ЗАВЕТИТЕ НА МЕТОДИЙ КУСЕВ И РОМЕН РОЛАН",
    subtitle: "Национална ученическа конференция в 3 панела",
    time: "9:30 - 16:00",
    location: "Зала „Америка за България“, ГПЧЕ „Ромен Ролан“",
    description:
      "Национална ученическа конференция, посветена на основните теми в завещанията на Методий Кусев и Ромен Ролан. В рамките на конференцията ще бъдат разгледани ключови въпроси в три различни панела: научен, литературен и културен. Това е уникална възможност за ученици и учители да изследват наследството на двамата велики интелектуалци и да предизвикат нови идеи и разговори в обществото.",
    details: ["Вижте пълната програма по панели след регистрация на място."],
  },
  {
    id: 3,
    icon: "🖼️",
    date: "21.04",
    title: "60 ГОДИНИ СВЕТЛИНА И ЦВЕТОВЕ",
    subtitle: "Откриване на юбилейни изложби на поколения роменролановци",
    time: "12:30",
    location: "ГПЧЕ „Ромен Ролан“",
    description:
      "Юбилейните изложби „60 ГОДИНИ СВЕТЛИНА И ЦВЕТОВЕ“ представят различни гледни точки на роменролановците през годините. В изложбата „Светът през вашия обектив“ ще бъдат показани фотоснимки, улавящи уникални моменти и пейзажи. Втората изложба „Безкрайност“ включва живописни произведения и художествени творби, създадени с вдъхновение от различни периоди и стилове.",
    details: [
      "Как да участвате в „Светът през вашия обектив“: изпратете снимките си на 60godinirr@gmail.com.",
      "В мейла посочете: три имена, випуск (ученици/алумни) и телефон за връзка. Краен срок: 31.03.2026 г.",
      "За участие в „Безкрайност“ следете предстоящите указания от организационния екип.",
    ],
  },
  {
    id: 4,
    icon: "🏅",
    date: "22.04",
    title: "60 ГОДИНИ С ПОБЕДА В СЪРЦЕТО - СПОРТЕН ПРАЗНИК",
    subtitle: "Спортни надпревари с участието на настоящи и бивши ученици",
    time: "10:00 - 14:00",
    location: "Парк „Артилерийски“",
    description:
      "Спортният празник „60 ГОДИНИ С ПОБЕДА В СЪРЦЕТО“ ще включва футбол, стрийт баскет 3x3, шахматен турнир, канадска борба, пикълбол, дартс и щафетни игри с отбори от различни поколения. Специално събитие ще бъде „Шеметната надпревара“ - „В търсене на съкровището“.",
    details: [
      "Състезанията са както индивидуални, така и отборни, с участници от различни випуски.",
      "Как да участвате: свържете се с организационния екип и заявете участие.",
    ],
  },
  {
    id: 5,
    icon: "📚",
    date: "23.04",
    title: "МАГИЯТА НА СЛОВОТО",
    subtitle: "Представяне на училищните издания „Пътеки“, „Репортер RR“, списание „ЕГО“",
    time: "12:00",
    location: "Зала „Америка за България“, ГПЧЕ „Ромен Ролан“",
    description:
      "„МАГИЯТА НА СЛОВОТО“ ще ни потопи в света на училищните издания, които са не само израз на творческото вдъхновение на учениците, но и важна част от културния живот на училището. Ще имате възможност да се запознаете с „Пътеки“, „Репортер RR“ и списание „ЕГО“.",
    details: ["Събитието е отворено за всички гости."],
  },
  {
    id: 6,
    icon: "🗣️",
    date: "24.04",
    title: "ГОВОРИ RR: СИЛАТА НА ПОКОЛЕНИЯТА",
    subtitle: "Бивши ученици споделят своите вдъхновяващи истории и опит",
    time: "16:00 - 20:00",
    location: "Държавен куклен театър - Стара Загора",
    description:
      "„ГОВОРИ RR: СИЛАТА НА ПОКОЛЕНИЯТА“ е събитие, което свързва настоящите ученици с бивши възпитаници на ГПЧЕ „Ромен Ролан“. Те ще споделят как знанията и ценностите от гимназията са им помогнали да се реализират в бизнеса, изкуствата, науката и обществените каузи.",
    details: [
      "Това е чудесна възможност за учениците да чуят различни гледни точки за бъдеща реализация.",
    ],
  },
  {
    id: 7,
    icon: "👩‍🏫",
    date: "25.04",
    title: "ТЪРЖЕСТВЕН ПЕДАГОГИЧЕСКИ СЪВЕТ С БИВШИ И НАСТОЯЩИ УЧИТЕЛИ",
    subtitle: "Среща за размяна на идеи и споделяне на опит",
    time: "10:00 - 11:00",
    location: "ГПЧЕ „Ромен Ролан“",
    description:
      "Тържественият педагогически съвет ще бъде възможност за обмен на идеи и опит между поколения преподаватели. В празничен контекст ще се обсъдят развитието на училището през годините и постиженията в образованието.",
    details: [
      "Събитието е израз на признание към труда и посветеността на учителите на ГПЧЕ „Ромен Ролан“.",
    ],
  },
  {
    id: 8,
    icon: "🤝",
    date: "25.04",
    title: "СРЕЩА НА ПОКОЛЕНИЯ РОМЕНРОЛАНОВЦИ",
    subtitle: "Възможност за срещи с бивши учители и съученици от различни поколения",
    time: "11:00 - 14:00",
    location: "ГПЧЕ „Ромен Ролан“",
    description:
      "„Среща на поколения Роменролановци“ ще събере ученици и учители от различни етапи на училищния живот с обща идея - да си спомнят за общите моменти и да обменят опит. В различни класни стаи ще бъдат организирани специални разговори с преподаватели.",
    details: [
      "Скоро ще бъде обявен списък с учителите, които ще се включат в срещите.",
      "Следете информацията тук за актуализации.",
    ],
  },
  {
    id: 9,
    icon: "🎭",
    date: "25.04",
    title: "ПЪТЕКИ - ПЪТУВАНЕ ПРЕЗ ЦЕННОСТИТЕ НА ЕДНО УЧИЛИЩЕ",
    subtitle: "Мултижанров спектакъл в 5 действия",
    time: "18:00",
    location: "Държавна опера Стара Загора",
    description:
      "„ПЪТЕКИ“ е спектакъл, който представя емоционално и художествено богатството на училищните ценности през годините. В пет действия ще бъдат използвани музика, танц, театър и литература, за да се пресъздадат ключови моменти от историята на ГПЧЕ „Ромен Ролан“.",
    details: ["Очаквайте съвсем скоро да пуснем билети в продажба."],
    actionLabel: "Виж повече и вземи билет",
    actionHref: "#",
  },
  {
    id: 10,
    icon: "🍸",
    date: "25.04",
    title: "ПРАЗНИЧЕН КОКТЕЙЛ",
    subtitle: "Официално закриване на юбилейния ден",
    time: "20:00",
    location: "Ресторант LEON",
    description:
      "Празничният коктейл предоставя възможност за неформални срещи между бивши и настоящи ученици, учители и партньори на училището. Вечерта ще бъде стилна и подходяща за социализация, празнуване и споделяне на специални моменти.",
    details: [],
    actionLabel: "Виж повече и вземи куверт",
    actionHref: "#",
  },
];

export function ProgramAccordion() {
  return (
    <section
      id="programa"
      className="scroll-mt-32 mt-16 rounded-3xl border border-[#164e89]/15 bg-linear-to-b from-white to-[#f8fbff] p-6 shadow-sm md:p-10"
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
            className="group overflow-hidden rounded-2xl border border-[#164e89]/15 bg-white shadow-sm transition hover:border-[#096fa7]/35 open:border-[#096fa7]/40"
          >
            <summary className="cursor-pointer list-none p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#096fa7]/40 md:p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-start gap-3">
                    <span className="pt-0.5 text-xl" aria-hidden>
                      {event.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#096fa7]">{event.date}</p>
                      <h3 className="mt-1 wrap-break-word text-base font-bold leading-snug text-[#164e89] md:text-lg">
                        {event.title}
                      </h3>
                      <p className="mt-1 wrap-break-word text-sm leading-relaxed text-[#164e89]/90">
                        {event.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <span className="mt-1 shrink-0 text-[#096fa7]" aria-hidden>
                  <ChevronDown className="size-4 group-open:hidden" />
                  <ChevronUp className="hidden size-4 group-open:block" />
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-start gap-2 pl-8 pr-1 md:gap-3">
                <p className="rounded-full bg-[#f2f7fc] px-3 py-1 text-xs font-medium text-[#164e89] md:text-sm">
                  <span className="font-semibold">Час:</span> {event.time}
                </p>
                <p className="max-w-full rounded-full bg-[#f2f7fc] px-3 py-1 text-xs font-medium text-[#164e89] md:text-sm">
                  <span className="font-semibold">Място:</span> {event.location}
                </p>
                <p className="px-1 py-1 text-xs font-semibold text-[#096fa7] md:text-sm">Виж повече -&gt;&gt;</p>
              </div>
            </summary>

            <div className="border-t border-[#164e89]/10 bg-[#fbfdff] p-5 text-sm leading-relaxed text-[#164e89] md:p-6">
              <div className="space-y-4">
                <p className="wrap-break-word leading-7">{event.description}</p>
                {event.details.map((detail, index) => (
                  <p
                    key={`${event.id}-${index}`}
                    className="wrap-break-word rounded-xl border border-[#164e89]/10 bg-white px-4 py-3 font-medium leading-6"
                  >
                    {detail}
                  </p>
                ))}
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




