import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PosSlider() {
  const t = useTranslations("pos");

  const images = [
    "/images/pos-1.png",
    "/images/pos-2.png",
    "/images/pos-3.png",
  ];

  return (
    <section className="pb-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-[260px_1fr]">
        <div>
          <h2 className="text-2xl font-black leading-tight text-[#123c73]">
            {t("title")}
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#168df2]">
            {t("subtitle")}
          </p>

          <div className="mt-6 flex gap-3">
            <button className="grid h-9 w-9 place-items-center rounded-full bg-[#168df2] text-white">
              <ArrowLeft size={18} />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-[#168df2] text-white">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4">
          {images.map((src, index) => (
            <div
              key={src}
              className="min-w-[220px] rounded-2xl bg-[#dff1ff] p-5 text-center"
            >
              <img src={src} alt="" className="mx-auto h-40 object-contain" />
              {index === 0 && (
                <span className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-[#168df2]">
                  {t("tag")}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
