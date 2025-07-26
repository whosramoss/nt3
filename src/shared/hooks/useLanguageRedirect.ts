import { useEffect } from "react";
import AppI18nConfig from "src/shared/utils/app-i18n-config";

export const useLanguageRedirect = () => {
  useEffect(() => {
    window.location.href = AppI18nConfig.setUrlByDefaultLocale("/");
  }, []);
};
