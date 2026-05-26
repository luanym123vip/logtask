import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "../components/LocaleSwitcher";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="min-h-screen p-10">
      <nav className="mb-8 flex items-center gap-4">
        <Link href="/about">{t("about")}</Link>
        <Link href="/shop">{t("shop")}</Link>
        <Link href="/contact">{t("contact")}</Link>

        <LocaleSwitcher />
      </nav>

      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-4 text-lg">{t("description")}</p>
    </main>
  );
}
