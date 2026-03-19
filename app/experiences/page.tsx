import Header from '@/components/header';
import Footer from '@/components/footer';
import ExperiencesHero from '@/components/sections/experiences-hero';
import ExperiencesSimple from '@/components/sections/experiences-simple';

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ExperiencesHero />
        <ExperiencesSimple />
      </main>
      <Footer />
    </div>
  );
}
