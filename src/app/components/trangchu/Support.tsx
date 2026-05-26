import { useTranslations } from "next-intl";
import { MessageSquareText } from "lucide-react";

export default function Support() {
  const t = useTranslations("support");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-slate-50 py-20">
      <div className="container-page">
        <h2 className="text-center text-2xl font-black text-[#123c73] md:text-3xl">
          {t("title")}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-xl bg-white p-6 shadow-sm">
              <MessageSquareText className="mb-4 text-[#168df2]" size={24} />
              <h3 className="font-black text-[#123c73]">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
