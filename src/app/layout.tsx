import type { Metadata } from "next";
import AppProvider from "@providers/AppProvider";
import { baseMetadata } from "@utils/meta";
import { fontNeueMontreal } from "@utils/fonts";
import CustomCursor from "@app/_components/Cursor";
import "@styles/global.css";
import { cn } from "@utils/utils";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('bg-primary', fontNeueMontreal.className)}>
        <AppProvider>
          <CustomCursor />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
