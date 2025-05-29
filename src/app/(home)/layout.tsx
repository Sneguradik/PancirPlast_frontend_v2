import type { Metadata } from "next";
import "@app/globals.css";
import "@styles/globals.scss";
import styles from "./MainLayout.module.scss";
import Header from "@components/Header";
import {CustomThemeProvider} from "@components/CustomThemeProvider";
import {ToastContainer} from "react-toastify";

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
        <ToastContainer/>
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
