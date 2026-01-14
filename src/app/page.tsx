import Header from "@/components/sections/header";
import HeroSlider from "@/components/sections/hero-slider";
import TrustBadges from "@/components/sections/trust-badges";
import ShopByCategory from "@/components/sections/shop-by-category";
import BestSellers from "@/components/sections/best-sellers";
import LatestProducts from "@/components/sections/latest-products";
import BrandSection from "@/components/sections/brand-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <TrustBadges />
        <ShopByCategory />
        <BestSellers />
        <LatestProducts />
        <BrandSection />
      </main>
      <Footer />
    </div>
  );
}
