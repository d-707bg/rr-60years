"use client";

import { Quote } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  years?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "В тези коридори за първи път разбрах колко далеч стигат думите ни и как езиците отварят врати към светове, за които само мечтаех.",
    name: "Елица П.",
    role: "Випуск 2005 · Преподавател по френски език",
  },
  {
    quote:
      "ГПЧЕ „Ромен Ролан“ ме научи да слушам с уважение и да защитавам идеите си със смирена увереност.",
    name: "Дамян Ж.",
    role: "Випуск 1994 · Дипломат",
  },
  {
    quote:
      "Носталгията по училището е всъщност благодарност – за приятелствата, за смеха и за безкрайните разговори, продължаващи и днес.",
    name: "София Л.",
    role: "Випуск 2018 · Студент",
  },
];

interface TestimonialSliderProps {
  items?: Testimonial[];
  accentLabel?: string;
}

const AUTO_PLAY_INTERVAL = 7000;

export function TestimonialSlider({
  items,
  accentLabel,
}: TestimonialSliderProps) {
  const slides = useMemo(
    () => (items && items.length ? items : defaultTestimonials),
    [items],
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const goTo = (i: number) => setIndex(i);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl shadow-[#0f1b2d]/15 backdrop-blur-2xl ring-1 ring-white/40 md:p-10">
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/65 via-transparent to-[#c9ecf3]/45"
        aria-hidden
      />
      <div className="relative space-y-6">
        {accentLabel && (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#294a63]">
            {accentLabel}
          </p>
        )}
        <div className="relative min-h-[260px] md:min-h-[220px]">
          {slides.map((slide, slideIndex) => (
            <article
              key={`${slide.name}-${slideIndex}`}
              className={cn(
                "absolute inset-0 flex flex-col gap-4 rounded-2xl border border-white/60 bg-white/80 p-6 text-[#0f1b2d] shadow-xl ring-1 ring-white/20 transition-all duration-700",
                slideIndex === index
                  ? "opacity-100 translate-y-0"
                  : "pointer-events-none translate-y-6 opacity-0",
              )}
              aria-hidden={slideIndex !== index}
            >
              <Quote className="h-10 w-10 text-[#8ccfdc]" aria-hidden />
              <p className="font-[var(--font-playfair)] text-xl leading-relaxed text-[#0f1b2d]">
                “{slide.quote}”
              </p>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-[#0d2b45]">{slide.name}</p>
                <p className="text-[#294a63]">{slide.role}</p>
                {slide.years && (
                  <p className="text-[#294a63]/80">{slide.years}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => goTo(dotIndex)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  dotIndex === index
                    ? "w-8 bg-[#0d2b45]"
                    : "w-2.5 bg-[#8ccfdc]/80 hover:bg-[#0d2b45]/60",
                )}
                aria-label={`Покажи отзив ${dotIndex + 1}`}
                aria-pressed={dotIndex === index}
              />
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#294a63]/80">
            {index + 1} / {slides.length}
          </p>
        </div>
      </div>
    </div>
  );
}
