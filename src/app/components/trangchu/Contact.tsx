import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-[#eef7ff] py-20">
      <div className="container-page">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_320px] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#168df2]">
              {t("label")}
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#123c73]">
              {t("title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              {t("desc")}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-xs font-bold text-slate-400">{t("hotline")}</p>
            <p className="mt-2 text-xl font-black text-[#123c73]">
              0336 988 876
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[360px_1fr]">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-[#123c73]">
              {t("infoTitle")}
            </h3>

            <div className="mt-6 space-y-5 text-sm text-slate-600">
              <p className="flex gap-3">
                <MapPin className="shrink-0 text-[#168df2]" size={20} />
                123 Nguyen Trai, District 1, Ho Chi Minh City
              </p>
              <p className="flex gap-3">
                <Phone className="shrink-0 text-[#168df2]" size={20} />
                0336 988 876
              </p>
              <p className="flex gap-3">
                <Mail className="shrink-0 text-[#168df2]" size={20} />
                support@avos.vn
              </p>
            </div>
          </div>

          <form className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
            <h3 className="text-xl font-black text-[#123c73]">
              {t("formTitle")}
            </h3>

            <div className="mt-6 grid gap-4">
              <input
                className="rounded-xl bg-slate-50 px-4 py-3 outline-blue-300"
                placeholder={t("name")}
              />
              <input
                className="rounded-xl bg-slate-50 px-4 py-3 outline-blue-300"
                placeholder={t("phone")}
              />
              <input
                className="rounded-xl bg-slate-50 px-4 py-3 outline-blue-300"
                placeholder={t("email")}
              />
              <textarea
                className="min-h-32 rounded-xl bg-slate-50 px-4 py-3 outline-blue-300"
                placeholder={t("message")}
              />
              <button className="rounded-full bg-[#168df2] px-6 py-3 font-bold text-white">
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
