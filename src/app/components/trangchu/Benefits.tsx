import { useTranslations } from "next-intl";

type Benefit = {
  title: string;
  desc: string;
};

export default function Benefits() {
  const t = useTranslations("benefits");
  const items = t.raw("items") as Benefit[];

  const images = ["/images/benefit-1.jpg", "/images/benefit-2.jpg"];

  return (
    <section className="bg-[#eef7ff] py-24">
      <div className="container-page">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-black leading-tight text-[#123c73] md:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-12 space-y-6">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="grid overflow-hidden rounded-2xl bg-white p-4 shadow-sm md:grid-cols-[0.9fr_1.4fr]"
            >
              <div className="p-5">
                <p className="text-xs font-bold uppercase text-slate-400">
                  AVOS Solution
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#123c73]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex text-sm font-bold text-[#168df2]"
                >
                  Find out
                </a>
              </div>

              <img
                src={images[index]}
                alt=""
                className="h-[260px] w-full rounded-xl object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
