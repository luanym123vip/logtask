"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Globe2 } from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const nextLocale = locale === "vi" ? "en" : "vi";

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-black text-[#f6a100]">
          AVOS
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
          <Link href="/">{t("home")}</Link>
          <Link href="#solutions">{t("solution")}</Link>
          <Link href="#services">{t("service")}</Link>
          <Link href="#pricing">{t("price")}</Link>
          <Link href="#about">{t("about")}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={pathname}
            locale={nextLocale}
            className="flex h-9 items-center gap-2 rounded-full bg-blue-50 px-3 text-sm font-semibold text-blue-600"
          >
            <Globe2 size={16} />
            {nextLocale.toUpperCase()}
          </Link>

          <Link
            href="#contact"
            className="hidden rounded-full bg-[#168df2] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 md:block"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </header>
  );
}
