import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container py-20 max-md:py-8  space-y-10">
      <Header />
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
        <Hero />
        <News />
      </div>
      <Products />
    </main>
  );
}
