import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import localFont from '@next/font/local'

const myFont = localFont({
  src:"/font/dana/woff2/Dana-Light.woff2" ,
  variable : "--default-font",
  weight:"400",
  display:"swap"
})
export const metadata = {
  title: "وبسایت شخصی مهدی نظری",
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
      <body className={`relative ${myFont.variable} font-dana`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
