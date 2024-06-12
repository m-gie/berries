import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <PopularProducts />
        <Services />
        <Reviews />
        <Subscribe />
        <Footer />
      </div>
    </main>
  );
}
