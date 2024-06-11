import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import Services from "@/components/Services";
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
      </div>
    </main>
  );
}
