import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import WhyDevClub from "@/components/WhyDevClub";
import MarketStats from "@/components/MarketStats";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StickyNav />
      <HeroSection />
      <WhyDevClub />
      <MarketStats />
      <Testimonials />
      <CtaSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
