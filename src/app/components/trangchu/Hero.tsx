import Image from "next/image";
import { Check, Play } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const stats = t.raw("stats") as Array<{
    top: string;
    number: string;
    bottom: string;
  }>;

  return (
    <section className="pt-[26px] pb-[102px] max-md:pb-12">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1240px]">
        <div className="relative">
          <div className="relative aspect-[1999/786] min-h-[430px] overflow-hidden rounded-[22px] bg-[#dff1ff] max-sm:min-h-[560px]">
            <Image
              fill
              preload
              sizes="(max-width: 1272px) calc(100vw - 32px), 1240px"
              src="/trang-chu/banner-home.png"
              alt=""
              className="object-cover object-center max-sm:object-[67%_center]"
            />

            <div className="relative z-10 flex h-full w-[54%] flex-col pl-[6.45%] pt-[7.25%] max-md:w-[64%] max-sm:w-full max-sm:px-6 max-sm:pt-8">
              <h1 className="text-[34px] font-black leading-[1.13] text-[#062854] sm:text-[38px] lg:text-[44px]">
                {t("titleLine1")}
                <br />
                {t("titleLine2Lead")}{" "}
                <span className="text-[#3d84ee]">{t("titleHighlight")}</span>
              </h1>

              <div className="mt-8 space-y-3 text-[17px] font-semibold leading-tight text-[#303744] lg:text-[19px]">
                <p className="flex items-center gap-[14px]">
                  <Check
                    className="h-[1.1em] w-[1.1em] shrink-0 text-[#202832]"
                    strokeWidth={3.4}
                  />
                  {t("desc1")}
                </p>

                <p className="flex items-center gap-[14px]">
                  <Check
                    className="h-[1.1em] w-[1.1em] shrink-0 text-[#202832]"
                    strokeWidth={3.4}
                  />
                  {t("desc2")}
                </p>
              </div>

              <div className="mt-[52px] flex items-center gap-4 max-sm:mt-9 max-sm:flex-wrap">
                <a
                  href="#contact"
                  className="rounded-full bg-[#3d8df0] px-10 py-[18px] text-[20px] font-bold leading-none text-white shadow-[0_15px_35px_rgba(22,141,242,0.25)] max-sm:px-7 max-sm:text-[17px]"
                >
                  {t("consult")}
                </a>

                <button className="flex items-center gap-[18px] rounded-full bg-[#dbeeff] py-[9px] pl-7 pr-2 text-[20px] font-bold leading-none text-[#1d62be] max-sm:gap-3 max-sm:pl-5 max-sm:text-[17px]">
                  {t("video")}

                  <span className="grid size-[42px] place-items-center rounded-full bg-white text-[#1d62be] sm:size-[46px]">
                    <Play
                      className="ml-1 size-[45%]"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-full z-20 w-[68.5%] -translate-x-1/2 -translate-y-[28%] rounded-[18px] bg-white px-[4.3%] py-5 shadow-[0_14px_38px_rgba(15,80,140,0.12)] max-md:static max-md:mt-4 max-md:w-full max-md:translate-x-0 max-md:translate-y-0 max-md:px-5">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((item, index) => (
                <div
                  key={item.number}
                  className={`px-4 text-center ${
                    index !== stats.length - 1 ? "md:border-r" : ""
                  } border-[#d8dfe8] max-md:py-3 max-md:odd:border-r max-md:[&:nth-child(-n+2)]:border-b`}
                >
                  <p className="text-[16px] leading-tight text-slate-500">
                    {item.top}
                  </p>

                  <p className="mt-[7px] text-[32px] font-black leading-none text-[#062854]">
                    {item.number}
                  </p>

                  <p className="mt-[9px] whitespace-pre-line text-[15px] leading-tight text-slate-500">
                    {item.bottom}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
