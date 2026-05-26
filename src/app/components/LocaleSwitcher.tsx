"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function changeLocale(nextLocale: "vi" | "en") {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <select
      value={locale}
      onChange={(event) => changeLocale(event.target.value as "vi" | "en")}
      className="rounded border px-3 py-2"
    >
      <option value="vi">VI</option>
      <option value="en">EN</option>
    </select>
  );
}
