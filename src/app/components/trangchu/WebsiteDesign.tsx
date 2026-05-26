import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function WebsiteDesign() {
  const t = useTranslations("website");

  return (
    <section id="services" className="py-24">
      <div className="container-page">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black text-[#123c73] md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
              {t("desc")}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#168df2] px-6 py-3 text-sm font-bold text-white"
          >
            {t("button")}
            <ArrowRight size={18} />
          </a>
        </div>

        <img
          src="/images/website-design.png"
          alt="Website design service"
          className="w-full rounded-2xl object-cover shadow-xl"
        />
      </div>
    </section>
  );
}
