"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Юбилей" },
  { href: "/#programa", label: "Програма" },
  { href: "/#galeria", label: "Галерия" },
  { href: "/dareniya", label: "Дарения" },
];

export function Header() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative z-50">
      <div className="bg-[#0b2e4a] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[11px] tracking-wide md:px-6">
          <p className="uppercase">ГПЧЕ „Ромен Ролан“ · Юбилейна страница</p>
          <div className="hidden items-center gap-3 opacity-90 md:flex">
            <a
              href="https://romainrolland.org/2025/"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Оригинален сайт
            </a>
          </div>
        </div>
      </div>

      <div
        className={`bg-white/92 backdrop-blur supports-[backdrop-filter]:bg-white/75 ${
          shadow ? "shadow-sm" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/rr-logo.png"
              alt="ГПЧЕ „Ромен Ролан“"
              width={56}
              height={56}
              className="h-11 w-auto"
              priority
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-[#0b2e4a]">
                ГПЧЕ „Ромен Ролан“
              </p>
              <p className="text-xs text-[#2d5876]">Стара Загора · 60 години</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#1c4e75] hover:text-[#0b2e4a]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dareniya"
              className="inline-flex items-center rounded-md bg-[#1c4e75] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b2e4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c4e75] focus-visible:ring-offset-2"
            >
              Подкрепи юбилея
            </Link>
          </div>
        </div>

        <nav className="border-t border-[#0b2e4a]/10 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full bg-[#edf5fb] px-3 py-1.5 text-xs font-semibold text-[#1c4e75]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
