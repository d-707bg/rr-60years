import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#164e89] shadow-sm">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video-rr.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#00162b]/65" aria-hidden />

      <div className="relative mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center md:min-h-[68vh]">
        <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
          60 години традиция и професионализъм
        </h1>
        <h2 className="mt-5 text-xl text-white/90 md:text-2xl">
          Шест десетилетия, в които създаваме бъдеще.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/#programa"
            className="inline-flex items-center rounded-md bg-[#096fa7] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#164e89]"
          >
            Вижте програмата
          </Link>
          <Link
            href="/dareniya"
            className="inline-flex items-center rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Подкрепете юбилея
          </Link>
        </div>
      </div>
    </section>
  );
}

