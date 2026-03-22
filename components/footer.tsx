import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#164e89]/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#164e89]">
            ГПЧЕ „Ромен Ролан“ · 60 години
          </p>
          <p className="text-sm leading-relaxed text-[#164e89]">
            Юбилейна страница с покана към общността – ученици, алумни и приятели на
            гимназията.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#096fa7]">
            Навигация
          </p>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-sm font-semibold text-[#164e89]">
              Начало
            </Link>
            <Link href="/#programa" className="text-sm font-semibold text-[#164e89]">
              Програма
            </Link>
            <Link href="/#galeria" className="text-sm font-semibold text-[#164e89]">
              Галерия
            </Link>
            <Link href="/dareniya" className="text-sm font-semibold text-[#164e89]">
              Дарения
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#096fa7]">
            Контакти
          </p>
          <div className="space-y-2 text-sm text-[#164e89]">
            <p>Стара Загора, България</p>
            <a className="font-semibold text-[#096fa7]" href="https://romainrolland.org/2025/" target="_blank" rel="noreferrer">
              romainrolland.org
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#164e89]/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-[#164e89] md:flex-row md:items-center md:px-6">
          <p>© {new Date().getFullYear()} ГПЧЕ „Ромен Ролан“ – юбилей</p>
          <p>Изработено за юбилейната кампания</p>
        </div>
      </div>
    </footer>
  );
}
