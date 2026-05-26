import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

type Solution = {
  title: string;
  desc: string;
};

export default function Solutions() {
  const t = useTranslations("solutions");
  const items = t.raw("items") as Solution[];

  const images = [
    "/images/service-1.png",
    "/images/service-2.png",
    "/images/service-3.png",
    "/images/service-4.png",
    "/images/service-5.png",
    "/images/service-6.png",
  ];

  return (
    <section id="solutions" className="pb-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black leading-tight text-[#123c73] md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {t("desc")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-2xl bg-[#eaf5ff] p-5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex justify-end">
                <ArrowUpRight className="text-[#168df2]" size={22} />
              </div>

              <img
                src={images[index]}
                alt=""
                className="mb-5 h-36 w-full object-contain"
              />

              <h3 className="text-lg font-black text-[#168df2]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
