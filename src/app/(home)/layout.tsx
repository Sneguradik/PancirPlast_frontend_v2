import type { Metadata } from "next";
import "@app/globals.css";
import "@styles/globals.scss";
import styles from "./MainLayout.module.scss";
import Header from "@components/Header";
import {CustomThemeProvider} from "@components/CustomThemeProvider";

export const metadata: Metadata = {
  title: "Pancir Plast",
  description: "Window store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={styles.main}>
        <CustomThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem>
          <Header/>
          <div className={styles.content_wrapper}>
            {children}
          </div>
        </CustomThemeProvider>

      </body>
    </html>
  );
}
