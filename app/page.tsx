import {
  Achievement,
  Hero,
  LatestBlog,
  NewsestCat,
  Offer,
  Portfolio,
  Services,
} from "@/components";
import InstaBanner from "@/components/InstaBanner";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Achievement />
        <Offer />
        <Services />
        <NewsestCat />
        <InstaBanner />
        <Portfolio />
        <LatestBlog/>
      </main>
    </>
  );
}
