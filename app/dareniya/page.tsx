"use client";

import {ArrowLeft, ArrowRight, Check, Copy} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {PartnersSection} from "@/components/home/partners-section";

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
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <section className="grid items-center gap-8 rounded-3xl border border-[#164e89]/15 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="space-y-4 text-[#164e89]">
          <h1 className="text-4xl font-bold md:text-5xl">Подкрепете ни</h1>
          <p className="leading-relaxed">
            Юбилеят на ГПЧЕ „Ромен Ролан“ е специален момент в историята на нашето
            училище. За да направим празника още по-запомнящ се, се нуждаем от вашата
            подкрепа! Независимо дали ще се включите с дарение, чрез доброволчески труд
            или като партньор на събитията, всяка форма на помощ е ценна и важна за нас.
            Благодарим ви, че сте част от нашето пътуване!
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#164e89]/15 bg-[#e6e6e6]">
          <Image
            src="/darenie1.jpg"
            alt="Юбилеен постер"
            width={850}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-[#164e89]/15 bg-white p-6 shadow-sm md:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#164e89]">Как можете да ни подкрепите:</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Дарения секция */}
          <div className="space-y-2 text-[#164e89]">
            <h3 className="text-xl font-bold">Дарения</h3>
            <p className="leading-relaxed">
              Вашият финансов принос ще ни помогне да реализираме събитията и да ги направим незабравими. Всяко евро има значение! Средствата могат да се превеждат по сметката на училищното настоятелство:
            </p>

            <div className="rounded-2xl border border-[#096fa7]/30 bg-[#e6e6e6]/45 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#096fa7]">
                Банкова сметка за дарения
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-[#164e89]">
                  <span className="font-semibold">IBAN:</span> {IBAN}
                </p>
                <p className="text-sm text-[#164e89]">
                  <span className="font-semibold">BIC/SWIFT КОД:</span> {BIC}
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
                    Копирайте IBAN
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Първа снимка */}
          <div className="relative overflow-hidden rounded-2xl border border-[#164e89]/15 bg-[#e6e6e6]">
            <Image
              src="/darenie2.jpg"
              alt="Подкрепа за юбилейните събития"
              width={900}
              height={620}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Втора снимка */}
          <div className="relative overflow-hidden rounded-2xl border border-[#164e89]/15 bg-[#e6e6e6]">
            <Image
              src="/darenie3.jpg"
              alt="Подкрепа за юбилейните събития"
              width={900}
              height={620}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Доброволчество и Партньорства секция */}
          <div className="space-y-6 text-[#164e89]">
            <div>
              <h3 className="text-xl font-bold mb-3">Доброволчество</h3>
              <p className="leading-relaxed mb-4">
                Винаги сме имали подкрепата на хора с големи сърца. Ако имате желание да се включите активно в организацията на събитията, не се колебайте да се свържете с нас.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSciX0qxMX5jY7lokjta5LWFZrAF3NctI8mQ-osZFmaLYkoefg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#096fa7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#164e89] mt-3"
              >
                Вижте повече <ArrowRight className="h-4 w-4"/>
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Партньорства</h3>
              <p className="leading-relaxed mb-4">
                Ако вашата компания или организация иска да бъде част от това важно събитие и да се присъедини като партньор или спонсор, свържете се с нас за повече информация.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdMGrwZYeKqSObp9AEfHZZNEuqyJA5gpwo1j_M6gZsQghiTaA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#096fa7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#164e89] mt-3"
              >
                Подкрепете ни <ArrowRight className="h-4 w-4"/>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#164e89]/10">
          <Link href="/" className="inline-flex text-sm font-semibold text-[#096fa7] hover:underline">
            <ArrowLeft className="h-4 w-4"/> Обратно към началната страница
          </Link>
        </div>
      </section>
      <PartnersSection/>
    </main>
  );
}
