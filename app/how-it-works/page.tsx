import Header from '@/components/header';
import Footer from '@/components/footer';
import HowItWorksHero from '@/components/sections/how-it-works-hero';
import StepsFlow from '@/components/sections/steps-flow';
import ReassuranceSection from '@/components/sections/reassurance-section';
import HowItWorksCTA from '@/components/sections/how-it-works-cta';

export default function HowItWorksPage() {
  return (
    <main>
      <Header />
      <HowItWorksHero />
      <StepsFlow />
      <ReassuranceSection />
      <HowItWorksCTA />
      <Footer />
    </main>
  );
}
