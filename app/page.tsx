"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";

const IBAN = "BG31FINV915010BGN0H32A";
const BIC = "FINVBGSF";
const BANK = "FIRST INVESTMENT BANK, BULGARIA";
const testimonials = [
  {
    quote:
      "Ромен Ролан ни учеше да бъдем смели в мечтите си и внимателни в думите си. Това е най-големият дар, който нося в работата си днес.",
    name: "Ивелина М.",
    role: "Випуск 2001 · Журналист",
  },
  {
    quote:
      "Първата ми изява на сцена беше в актовата зала на гимназията. Всяко връщане за годишнина е като репетиция за ново начало.",
    name: "Николай Т.",
    role: "Випуск 1990 · Артист",
  },
  {
    quote:
      "Когато минавам покрай училището и чувам гласовете отвътре, знам, че духът на нашата общност е все така жив и любопитен.",
    name: "Мария Ж.",
    role: "Випуск 2012 · UX дизайнер",
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(IBAN);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-stretch justify-center px-4 py-12 md:py-16">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden
      >
        <div className="absolute inset-x-8 top-8 h-32 rounded-full bg-white/35 blur-3xl" />
        <div className="absolute inset-x-16 bottom-4 h-36 rounded-full bg-[#8ccfdc]/30 blur-3xl" />
      </div>

      <main className="relative z-10 w-full max-w-6xl space-y-12 text-[#0f1b2d]">
        <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/65 shadow-2xl shadow-[#0f1b2d]/10 backdrop-blur-xl ring-1 ring-white/50">
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/55 via-transparent to-[#8ccfdc]/35"
            aria-hidden
          />
          <div className="grid items-center gap-10 p-8 md:grid-cols-[1.05fr,0.95fr] md:p-12">
            <div className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#294a63]">
                Шест десетилетия учене, приятелства и бъдеще
              </p>
              <h1 className="font-[var(--font-playfair)] text-3xl leading-tight text-[#0f1b2d] md:text-4xl lg:text-5xl">
                ГПЧЕ „РОМЕН РОЛАН“ СТАВА НА 60!
              </h1>
              <p className="text-lg leading-relaxed text-[#18314f] md:text-xl">
                Носталгично и смело гледаме към следващите години. Винаги
                различни, но обединени, че тук сме открили и опазили
                най-светлите си приятелства, езици и мечти.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium text-[#294a63]">
                <span className="rounded-full bg-[#c9ecf3]/70 px-4 py-2">
                  Стара Загора
                </span>
                <span className="rounded-full bg-[#c9ecf3]/70 px-4 py-2">
                  60 години езици
                </span>
                <span className="rounded-full bg-[#c9ecf3]/70 px-4 py-2">
                  Една общност
                </span>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 translate-x-6 translate-y-6 rounded-[28px] bg-[#0f1b2d]/10 blur-3xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white/75 via-[#c9ecf3]/50 to-[#8ccfdc]/60 p-2 shadow-xl">
                <div className="rounded-[22px] border border-dashed border-[#0f1b2d]/15 bg-white/70 p-6 text-center shadow-inner">
                  <div className="mx-auto mb-5 h-16 w-16 rounded-full border border-[#0f1b2d]/15 bg-[#c9ecf3]/70 shadow-sm" />
                  <p className="font-[var(--font-playfair)] text-xl text-[#0f1b2d]">
                    Илюстрация на училището
                  </p>
                  <p className="mt-2 text-sm text-[#294a63]">
                    Художествено място за бъдещата рисунка на сградата. Tонът е
                    ефирен, като от постер.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/60 p-8 shadow-xl shadow-[#0f1b2d]/10 backdrop-blur-xl md:p-12">
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40"
            aria-hidden
          />
          <div className="relative space-y-8">
            <div className="space-y-4 text-center">
              <p className="text-base font-semibold text-[#0f1b2d] md:text-lg">
                Добре дошли, съмишленици, бивши и настоящи ученици.
              </p>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#18314f] md:text-xl">
                ГПЧЕ „Ромен Ролан“ е символ на града под липите – Стара Загора.
                Училището ни е дом на българското слово и много чужди езици,
                място, което се променя заедно с нас, но запазва духа на
                любопитство, свобода и приятелство.
              </p>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#294a63]">
                Каним ви на празничната седмица, за да споделим истории, spомени
                и смелите планове, които ни очакват.
              </p>
            </div>

            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-[#0f4c75]/90 via-[#18314f]/92 to-[#0d2b45]/92 p-8 text-white shadow-2xl ring-1 ring-white/20">
              <div
                className="absolute -inset-8 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.28),transparent_35%)]"
                aria-hidden
              />
              <div className="relative flex flex-col items-center gap-3 text-center">
                <span className="text-xs uppercase tracking-[0.32em] text-white/80">
                  Празнична седмица
                </span>
                <p className="font-[var(--font-playfair)] text-3xl md:text-4xl">
                  17 – 25 април
                </p>
                <p className="max-w-xl text-base text-white/85">
                  Очакват ви концерти, изложби, срещи на випуски и спокойни
                  разходки из коридорите, които пазят нашите истории.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/65 p-8 shadow-2xl shadow-[#0f1b2d]/10 backdrop-blur-xl md:p-12">
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/65 via-transparent to-[#c9ecf3]/55"
            aria-hidden
          />
          <div className="relative grid gap-8 md:grid-cols-[1.05fr,0.95fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#294a63]">
                Подкрепете празника
              </p>
              <h2 className="font-[var(--font-playfair)] text-2xl leading-tight text-[#0f1b2d] md:text-3xl">
                Дарителска сметка
              </h2>
              <p className="text-base leading-relaxed text-[#18314f] md:text-lg">
                Благодарим за подкрепата, която поддържа жив духа на езиковата
                гимназия и помага празникът ни да достигне всички, които пазят
                ГПЧЕ „Ромен Ролан“ в сърцето си.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#0f1b2d]/8 bg-white/80 p-6 shadow-xl ring-1 ring-white/60">
              <div
                className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-[#8ccfdc]/40 blur-2xl"
                aria-hidden
              />
              <div
                className="absolute -left-8 -bottom-10 h-32 w-32 rounded-full bg-[#0f4c75]/20 blur-2xl"
                aria-hidden
              />

              <div className="relative space-y-5 text-[#0f1b2d]">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#294a63]">Банка</p>
                  <p className="text-base font-medium">{BANK}</p>
                </div>

                <div className="space-y-3 rounded-xl bg-[#c9ecf3]/40 p-4 ring-1 ring-[#0f1b2d]/8">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#294a63]">IBAN</p>
                    <p className="break-all font-mono text-lg font-semibold tracking-tight text-[#0d2b45]">
                      {IBAN}
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0d2b45] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:translate-y-[-1px] hover:bg-[#18314f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0d2b45]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Копирано
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Копирай IBAN
                      </>
                    )}
                  </button>
                  <p className="text-xs text-[#294a63]" aria-live="polite">
                    {copied
                      ? "IBAN беше копиран в клипборда."
                      : "Натиснете, за да копирате IBAN."}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#294a63]">
                    BIC / SWIFT
                  </p>
                  <p className="font-mono text-base font-semibold tracking-tight text-[#0d2b45]">
                    {BIC}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/65 p-8 shadow-2xl shadow-[#0f1b2d]/10 backdrop-blur-xl md:p-12">
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-[#bde9ef]/55"
            aria-hidden
          />
          <div className="relative space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#294a63]">
                Гласове на поколенията
              </p>
              <h2 className="font-[var(--font-playfair)] text-2xl leading-tight text-[#0f1b2d] md:text-3xl">
                Отзиви, които носят светлината на коридорите
              </h2>
              <p className="text-base leading-relaxed text-[#18314f] md:text-lg">
                Истории, писма и кратки изповеди от хората, които наричат ГПЧЕ
                „Ромен Ролан“ свой дом. Те връщат спомена за аромат на липи и
                първи думи на чужд език.
              </p>
            </div>

            <TestimonialSlider
              items={testimonials}
              accentLabel="Алумни за училището"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
