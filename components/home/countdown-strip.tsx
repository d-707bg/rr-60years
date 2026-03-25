"use client";

import { useEffect, useMemo, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_DATE = new Date("2026-04-14T11:00:00+03:00");

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function TimeCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-20 rounded-xl border border-white/30 bg-white/10 px-3 py-3 text-center backdrop-blur-sm md:min-w-24 md:px-4">
      <p className="text-2xl font-bold text-white md:text-3xl">{String(value).padStart(2, "0")}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/90">{label}</p>
    </div>
  );
}

export function CountdownStrip() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(TARGET_DATE));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(TARGET_DATE));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const isStarted = useMemo(
    () =>
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0,
    [timeLeft],
  );

  return (
    <section className="mt-16 rounded-2xl bg-[#164e89] px-5 py-10 text-center shadow-sm md:px-8">
      {/*<p className="text-sm uppercase tracking-[0.26em] text-white/85">Юбилеен брояч</p>*/}
      <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
        До началото на юбилейните събития остават:
      </h2>

      {isStarted ? (
        <p className="mt-6 text-lg font-semibold text-white">Юбилейните събития вече започнаха.</p>
      ) : (
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <TimeCard label="Дни" value={timeLeft.days} />
          <TimeCard label="Часове" value={timeLeft.hours} />
          <TimeCard label="Минути" value={timeLeft.minutes} />
          <TimeCard label="Секунди" value={timeLeft.seconds} />
        </div>
      )}
    </section>
  );
}

