import React from 'react';
import Image from "next/image";
import {ArrowRight} from "lucide-react";

function PodkrepeteNi() {
    return (
        <section className="grid items-center gap-8 rounded-3xl border border-[#164e89]/15 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10 mt-10">
            <div className="space-y-4 text-[#164e89]">
                <h1 className="text-4xl font-bold md:text-5xl">Подкрепете ни</h1>
                <p className="leading-relaxed">
                    Юбилеят на ГПЧЕ „Ромен Ролан“ е специален момент в историята на нашето
                    училище. За да направим празника още по-запомнящ се, се нуждаем от вашата
                    подкрепа! Независимо дали ще се включите с дарение, чрез доброволчески труд
                    или като партньор на събитията, всяка форма на помощ е ценна и важна за нас.
                    Благодарим ви, че сте част от нашето пътуване!
                </p>
                <button className="mt-2 inline-flex items-center gap-2 rounded-md bg-[#096fa7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#164e89]">
                    Вижте повече <ArrowRight className="w-4 h-4"/>
                </button>
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
    );
}

export default PodkrepeteNi;