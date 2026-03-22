"use client";

import {ArrowLeft, Check, Copy} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const IBAN = "BG31FINV915010BGN0H32A";
const BIC = "FINVBGSF";
const BANK = "FIRST INVESTMENT BANK";

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
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <section className="grid items-center gap-8 rounded-3xl border border-[#164e89]/15 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="space-y-4 text-[#164e89]">
          <h1 className="text-4xl font-bold md:text-5xl">Подкрепете ни</h1>
          <p className="leading-relaxed">
            Юбилеят на ГПЧЕ „Ромен Ролан“ е специален момент в историята на нашето
            училище. За да направим празника още по-запомнящи се, се нуждаем от вашата
            подкрепа! Независимо дали ще се включите с дарение, чрез доброволчески труд
            или като партньор на събитията, всяка форма на помощ е ценна и важна за нас.
            Благодарим ви, че сте част от нашето пътуване!
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#164e89]/15 bg-[#e6e6e6]">
          <Image
            src="/poster.jpg"
            alt="Юбилеен постер"
            width={850}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-10 grid items-center gap-8 rounded-3xl border border-[#164e89]/15 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="order-2 relative overflow-hidden rounded-2xl border border-[#164e89]/15 bg-[#e6e6e6] md:order-1">
          <Image
            src="/img2.jpg"
            alt="Подкрепа за юбилейните събития"
            width={900}
            height={620}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 space-y-4 text-[#164e89] md:order-2">
          <h2 className="text-3xl font-bold">Как можете да ни подкрепите:</h2>
          <ul className="space-y-2 leading-relaxed">
            <li>- Дарения</li>
            <li>- Доброволчество</li>
            <li>- Партньорства</li>
          </ul>

          <div className="rounded-2xl border border-[#096fa7]/30 bg-[#e6e6e6]/45 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#096fa7]">
              Банкова сметка за дарения
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-[#164e89]">
                <span className="font-semibold">IBAN:</span> {IBAN}
              </p>
              <p className="text-sm text-[#164e89]">
                <span className="font-semibold">BIC:</span> {BIC}
              </p>
              <p className="text-sm text-[#164e89]">
                <span className="font-semibold">Банка:</span> {BANK}
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#096fa7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#164e89]"
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
          </div>

          <Link href="/" className="inline-flex text-sm font-semibold text-[#096fa7] hover:underline">
            <ArrowLeft className="h-4 w-4"/> Обратно към началната страница
          </Link>
        </div>
      </section>
    </main>
  );
}
