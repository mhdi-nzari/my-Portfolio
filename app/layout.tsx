import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import localFont from "@next/font/local";
import Head from "next/head";

/* ---------------- Dana Fonts ---------------- */
const dana = localFont({
  display: "swap",
  variable: "--default-font",
  src: [
    {
      path: "../public/font/yekan-bkh/woff2/YekanBakhFaNum-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/font/yekan-bkh/woff2/YekanBakhFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/yekan-bkh/woff2/YekanBakhFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },

  
    {
      path: "../public/font/yekan-bkh/woff2/YekanBakhFaNum-Bold.woff2",
      weight: "600",
      style: "normal",
    },

    {
      path: "../public/font/yekan-bkh/woff2/YekanBakhFaNum-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});
export const metadata = {
  title: {
    default: "وبسایت مهدی نظری",
    template: "%s | وبسایت مهدی نظری",
  },
  description:
    "مهدی نظری هستم برنامه نویس فرانت اند که توی این حوضه یادمیگیره و آموزش هاش رو انتقال میده",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="font-dana" lang="fa" dir="rtl">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={`relative mx-auto oveflow-hidden max-w-screen-2xl ${dana.variable} font-dana`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
