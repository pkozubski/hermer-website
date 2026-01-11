import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EcommerceOfferHero } from "@/components/oferta/EcommerceOfferHero";
import { EcommerceProcessSection } from "@/components/oferta/EcommerceProcessSection";
import { EcommerceFeaturesSection } from "@/components/oferta/EcommerceFeaturesSection";
import { EcommerceTechStackSection } from "@/components/oferta/EcommerceTechStackSection";
import { EcommercePricingSection } from "@/components/oferta/EcommercePricingSection";
import { EcommerceFaq } from "@/components/oferta/EcommerceFaq";
import { EcommerceContactSection } from "@/components/oferta/EcommerceContactSection";

export default function EcommerceOfferPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <EcommerceOfferHero />
            <EcommerceProcessSection />
            <EcommerceFeaturesSection />
            <EcommerceTechStackSection />
            <EcommercePricingSection />
            <EcommerceFaq />
            <EcommerceContactSection />
            <Footer />
        </main>
    );
}
