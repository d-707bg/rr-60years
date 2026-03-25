import Link from "next/link";
import { Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";

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
          <div className="flex gap-3 pt-2">
            <a 
              href="https://www.facebook.com/GpceRomenRolanStaraZagora"
              target="_blank" 
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#096fa7] text-white transition hover:bg-[#164e89]"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/school/romain-rolland-foreign-language-high-school/?originalSubdomain=bg"
              target="_blank" 
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#096fa7] text-white transition hover:bg-[#164e89]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
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
          <div className="space-y-3 text-sm text-[#164e89]">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#096fa7]" />
              <a href="tel:0878720092" className="font-semibold text-[#096fa7] hover:underline">
                0878 720 092 (директор)
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#096fa7]" />
              <a href="mailto:info-2403264@edu.mon.bg" className="font-semibold text-[#096fa7] hover:underline">
                info-2403264@edu.mon.bg
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-[#096fa7] mt-0.5" />
              <span>
                ул. „Цар Иван Шишман" №62,<br />
                гр. Стара Загора
              </span>
            </div>
            <div className="pt-2">
              <a className="font-semibold text-[#096fa7]" href="https://romainrolland.org/2025/" target="_blank" rel="noreferrer">
                romainrolland.org
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#164e89]/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-[#164e89] md:flex-row md:items-center md:px-6">
          <p>© {new Date().getFullYear()} ГПЧЕ „Ромен Ролан“ – юбилей</p>
          <p>Изработено от Даниел Тодоров, 12"з" клас</p>
        </div>
      </div>
    </footer>
  );
}
