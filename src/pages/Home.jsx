// @ts-ignore CSS side-effect imports are resolved by the bundler.
import "@/styles/geriactiva.css";
import TopBar from "@/components/landing/TopBar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import PhraseBand from "@/components/landing/PhraseBand";
import Gallery from "@/components/landing/Gallery";
import Bonuses from "@/components/landing/Bonuses";
import Offer from "@/components/landing/Offer";
import Footer from "@/components/landing/Footer";
import PurchaseNotifications from "@/components/landing/PurchaseNotifications";
import Faq from "@/components/landing/Faq";

export default function Home() {
  return (
    <div className="ga">
      <TopBar />
      <Hero />
      {/* <WhyWebApp /> */}
      <SocialProof />

      {/* <PhraseBand>Dejá de planificar desde cero. Abrí, elegí y aplicá.</PhraseBand> */}
      {/* <Steps /> */}
      <PhraseBand dark>
        Todo el conocimiento psicoanalítico en un solo lugar.
      </PhraseBand>

      {/* <Includes /> */}
      <Gallery />

      <Bonuses />
      <PhraseBand>El valor real de este material supera los $267.</PhraseBand>
      {/* <Objections /> */}

      <Offer />
      <Faq />
      <Footer />
      <PurchaseNotifications />
    </div>
  );
}