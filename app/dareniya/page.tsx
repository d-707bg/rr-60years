"use client";

import { Check, Copy, CreditCard, HeartHandshake, Info } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const IBAN = "BG31FINV915010BGN0H32A";
const BIC = "FINVBGSF";
const BANK = "FIRST INVESTMENT BANK, BULGARIA";

export default function DonationsPage() {
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
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5876]">
              Дарения
            </p>
            <h1 className="font-[var(--font-playfair)] text-3xl leading-tight text-[#0b2e4a] md:text-4xl">
              Подкрепи юбилея на ГПЧЕ „Ромен Ролан“
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#2d5876] md:text-lg">
              С твоята подкрепа правим празничната седмица по-достъпна и по-красива за
              всички поколения на гимназията.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#0b2e4a]/10 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <HeartHandshake className="mt-1 h-5 w-5 text-[#1c4e75]" aria-hidden />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#0b2e4a]">
                    За какво са средствата
                  </p>
                  <p className="text-sm leading-relaxed text-[#2d5876]">
                    Организация на юбилейни събития, техника/сцена, изложбени материали и
                    инициативи за общността.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#0b2e4a]/10 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="mt-1 h-5 w-5 text-[#1c4e75]" aria-hidden />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#0b2e4a]">Прозрачност</p>
                  <p className="text-sm leading-relaxed text-[#2d5876]">
                    Ако имате нужда от отчет или потвърждение, свържете се с училището.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#0b2e4a]/10 bg-[#f4f8fb] p-6 md:p-7">
            <div className="flex items-start gap-3">
              <CreditCard className="mt-1 h-5 w-5 text-[#1c4e75]" aria-hidden />
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#0b2e4a]">
                  Банков превод (препоръчано)
                </p>
                <p className="text-sm text-[#2d5876]">
                  Най-лесният начин да подкрепиш кампанията.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-[#2d5876]">
            <Link href="/" className="font-semibold text-[#1c4e75] hover:underline">
              ← Обратно към юбилейната страница
            </Link>
          </div>
        </section>

        <aside className="rounded-3xl border border-[#0b2e4a]/10 bg-white p-6 shadow-sm md:p-8">
          <div className="space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5876]">
                Дарителска сметка
              </p>
              <p className="text-lg font-semibold text-[#0b2e4a]">{BANK}</p>
            </div>

            <div className="space-y-2 rounded-2xl border border-[#0b2e4a]/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2d5876]">
                IBAN
              </p>
              <p className="break-all font-mono text-lg font-semibold text-[#0b2e4a]">
                {IBAN}
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-md bg-[#1c4e75] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b2e4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c4e75] focus-visible:ring-offset-2"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden />
                    Копирано
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden />
                    Копирай IBAN
                  </>
                )}
              </button>
              <p className="text-xs text-[#2d5876]" aria-live="polite">
                {copied ? "IBAN беше копиран." : "Натисни бутона, за да копираш."}
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-[#0b2e4a]/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2d5876]">
                BIC / SWIFT
              </p>
              <p className="font-mono text-base font-semibold text-[#0b2e4a]">{BIC}</p>
            </div>

            <div className="rounded-2xl border border-[#0b2e4a]/10 bg-[#fff7ed] p-5">
              <p className="text-sm font-semibold text-[#7c2d12]">Важно</p>
              <p className="mt-1 text-sm leading-relaxed text-[#7c2d12]/90">
                При нужда от основание за превод, използвайте: „Юбилей 60 години“.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
