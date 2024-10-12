import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Strap from "@/components/Strap";
import Text from "@/components/Text";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <Strap />
      {/* <Bottom /> */}
      <Review />
      <FAQ />
      <Text />
      <Footer />
    </main>
  );
}
