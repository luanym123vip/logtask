import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("stats");

  const stats = [
    ["5.000+", t("customers")],
    ["2348", t("transactions")],
    ["450", t("partners")],
    ["1200", t("support")],
  ];

  return (
    <section className="-mt-8 relative z-10">
      <div className="container-page">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 rounded-2xl bg-white p-5 card-shadow md:grid-cols-4">
          {stats.map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black text-[#123c73]">{num}</p>
              <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
