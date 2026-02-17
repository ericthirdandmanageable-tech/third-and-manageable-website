import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import EcosystemOverview from "@/components/EcosystemOverview";
import HowItWorks from "@/components/HowItWorks";
import TargetUsers from "@/components/TargetUsers";
import BrandSection from "@/components/BrandSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <EcosystemOverview />
        <HowItWorks />
        <TargetUsers />
        <BrandSection />
      </main>
      <Footer />
    </>
  );
}
