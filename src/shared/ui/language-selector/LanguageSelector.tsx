"use client";

import { useRouter, usePathname } from "next/navigation";
import AppI18nConfig from "src/shared/utils/app-i18n-config";
import { cn } from "src/shared/utils/utils";

interface LanguageSelectorProps {
  currentLanguage: string;
}

export function LanguageSelector({ currentLanguage }: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string) => {
    router.push(`/${value}${pathname.replace(`/${currentLanguage}`, "")}`);
  };

  return (
    <div className="left-0 top-10 flex gap-[4px] rounded-full p-1  backdrop-blur-2xl">
      {AppI18nConfig.getLanguageOptions().map(({ locale }) => {
        const isCurrentLang = currentLanguage === locale;
        return (
          <div
            key={locale}
            onClick={() => handleChange(locale)}
            className={cn(
              "mx-[0.8px] cursor-pointer select-none rounded-full px-3 py-1 text-base  hover:bg-[#696c71]",
              { "bg-secondary": isCurrentLang },
            )}
          >
            {locale.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}
