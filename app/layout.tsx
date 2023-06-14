import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import localFont from "@next/font/local";

/* ---------------- Dana Fonts ---------------- */
const dana = localFont({
  display: "swap",
  variable: "--default-font",
  src: [
    {
      path: "../public/font/dana/woff2/Dana-Light.woff2",
      weight: "300",
      style: "normal",
    },

    {
      path: "../public/font/dana/woff2/Dana-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/dana/woff2/Dana-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/dana/woff2/Dana-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/font/dana/woff2/Dana-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/font/dana/woff2/Dana-Heavy.woff2",
      weight: "990",
      style: "normal",
    },
  ],
});
export const metadata = {
  title:{
    default: "وبسایت مهدی نظری",
    template:"%s | وبسایت مهدی نظری"
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
    <html lang="fa" dir="rtl">
      <body className={`relative ${dana.variable} font-dana`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
