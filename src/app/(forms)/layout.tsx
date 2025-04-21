import styles from "./Form.module.scss";
import "@styles/globals.scss";
import type {Metadata} from "next";
import {ToastContainer} from "react-toastify";
import "@app/globals.css";

export const metadata: Metadata = {
  title: "Pancir Plast",
  description: "Компания, которая изменит ваше представление об окнах. Век технологий настал – пустите его в свой дом.",
};

export default function FormLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <ToastContainer/>
    <div className={styles.layout}>
      {children}
    </div>
    </body>
    </html>
  )
}