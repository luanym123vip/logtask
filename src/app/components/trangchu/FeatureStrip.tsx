import { useTranslations } from "next-intl";
import { BadgeCheck } from "lucide-react";

export default function FeatureStrip() {
  const t = useTranslations("featureStrip");
  const items = t.raw("items") as string[];

  return (
    <section className="py-20">
      <div className="container-page">
        <div className="rounded-2xl bg-[#eaf5ff] px-6 py-10 text-center">
          <h2 className="text-xl font-bold text-[#123c73] md:text-2xl">
            {t("title")}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 text-left text-sm font-semibold text-slate-600 shadow-sm"
              >
                <BadgeCheck className="mb-3 text-[#168df2]" size={22} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
