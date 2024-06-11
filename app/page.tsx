import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <PopularProducts />
      </div>
    </main>
  );
}
