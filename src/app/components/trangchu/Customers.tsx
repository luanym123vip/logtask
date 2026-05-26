import { useTranslations } from "next-intl";

export default function Customers() {
  const t = useTranslations("customers");

  return (
    <section className="pb-20">
      <div className="container-page text-center">
        <h2 className="text-2xl font-black text-[#123c73]">{t("title")}</h2>

        <div className="mt-10 flex flex-wrap justify-center gap-8 opacity-80">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="grid h-14 w-14 place-items-center rounded-full bg-white shadow-md ring-1 ring-blue-100"
            >
              <img
                src={`/images/logo-${index + 1}.png`}
                alt=""
                className="h-10 w-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
