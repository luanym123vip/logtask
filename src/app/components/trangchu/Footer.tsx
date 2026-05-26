import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative overflow-hidden bg-[#fafbfc] pt-[49px] pb-8 text-[#0b2a50]">
      {/* Background left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[72px] h-[386px] w-[352px] bg-[url('/trang-chu/ft-l.png')] bg-contain bg-left-top bg-no-repeat opacity-100"
      />

      {/* Background right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[48px] h-[410px] w-[743px] bg-[url('/trang-chu/ft-r.png')] bg-contain bg-right-top bg-no-repeat opacity-100"
      />

      <div className="relative z-10 w-full px-6">
        <div className="mx-auto w-full max-w-[1078px]">
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[355.4px_minmax(0,555px)] lg:justify-between">
            {/* Info */}
            <div className="w-full max-w-[355.4px] text-[14px] leading-[1.25]">
              <h2 className="text-[16px] font-semibold leading-[1.1]">
                {t("companyLine1")}
                <br />
                {t("companyLine2")}
              </h2>

              <div className="mt-6 space-y-3 font-normal">
                <p>
                  <strong className="font-semibold">{t("headOffice")}:</strong>{" "}
                  5901 Goshen Springs Rd Ste C
                  <br />
                  Norcross, GA 30071
                </p>

                <p>
                  <strong className="font-semibold">{t("vietnamOffice")}:</strong>{" "}
                  5901 Goshen Springs Rd Ste C
                  <br />
                  Norcross, GA 30071
                </p>

                <p>
                  <strong className="font-semibold">
                    {t("overseasSupport")}:
                  </strong>
                  <br />
                  <strong className="font-semibold">{t("usa")}:</strong>{" "}
                  <Link href="tel:+17708976789" className="text-[#3487f6]">
                    +770-897-6789
                  </Link>
                </p>

                <p className="break-words">
                  <strong className="font-semibold">Email:</strong>{" "}
                  <Link
                    href="mailto:support@smartlinksusa.com"
                    className="break-words"
                  >
                    support@smartlinksusa.com
                  </Link>
                </p>

                <p>
                  <strong className="font-semibold">
                    {t("followUs")}:
                  </strong>
                </p>
              </div>

              <div className="mt-4 flex items-center gap-[16px] text-[#062854]">
                <Link href="#" aria-label="Facebook">
                  <FaFacebookF className="h-[20px] w-[20px]" />
                </Link>

                <Link href="#" aria-label="YouTube">
                  <FaYoutube className="h-[20px] w-[20px]" />
                </Link>

                <Link href="#" aria-label="TikTok">
                  <FaTiktok className="h-[20px] w-[20px]" />
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="mx-auto w-full max-w-[555px] overflow-hidden rounded-[9px] bg-[#b8ddf8]">
              <Image
                src="/trang-chu/map.jpg"
                alt={t("mapAlt")}
                width={555}
                height={238}
                className="aspect-[555/238] h-auto w-full object-cover"
                sizes="(max-width: 1024px) calc(100vw - 72px), 555px"
              />
            </div>
          </div>

          <div className="mt-[36px] h-px bg-[#e8edf4]" />

          <p className="mt-[16px] text-[14px] leading-none text-[#17345a]">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
