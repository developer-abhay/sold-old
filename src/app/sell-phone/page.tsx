import Bottom from "@/components/Bottom";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SellPhone from "@/components/SellPhone";
import Strap from "@/components/Strap";
import Text from "@/components/Text";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Hero isBannerVisible={false} />
      <SellPhone />
      <Works />
      <Strap />
      <Bottom />
      <FAQ />
      <Text />
      <Footer />
    </main>
  );
}
