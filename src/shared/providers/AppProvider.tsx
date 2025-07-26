import { CustomQueryProvider } from "src/shared/providers/QueryProvider";
import { ThemeProvider } from "src/shared/providers/ThemeProvider";
import { CommonsProps } from "src/shared/utils/utils";

export default async function AppProvider({ children }: CommonsProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <CustomQueryProvider>{children}</CustomQueryProvider>
    </ThemeProvider>
  );
}
