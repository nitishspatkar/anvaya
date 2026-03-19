import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutHero from '@/components/sections/about-hero';
import StorySection from '@/components/sections/story-section';
import AboutCTA from '@/components/sections/about-cta';

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <StorySection
        number={1}
        title="Who We Are"
        content="We are an Indian couple who fell in love with Switzerland and chose to build our life in Bern. Our journey began with wanderlust, curiosity, and a desire to bridge cultures. After years of exploring, living, and deepening our roots here, we realized we wanted to share this place—not as tour guides, but as friends. We wanted others to experience Switzerland the way we do: authentically, intimately, and with genuine warmth."
        imagePosition="right"
      />
      <StorySection
        number={2}
        title="Why We Host This Way"
        content="We host exactly two guests at a time by design. This isn't a limitation—it's our philosophy. We believe depth beats breadth. When we host you, we're not checking boxes on an itinerary. We're having a conversation. We learn what draws you, what excites you, what might surprise you. We then craft an experience that feels personal, never templated. You become our friends for the week. You sit at our table, laugh at our jokes, and see Switzerland through our eyes."
        imagePosition="left"
      />
      <StorySection
        number={3}
        title="What to Expect From Us"
        content="Warmth is non-negotiable. We treat you as we'd treat our own family. We're flexible—if you want to change plans, we adapt. We're curious—your stories matter as much as ours. We're honest—we'll tell you what's worth your time and what's worth skipping. Most importantly, we're a cultural bridge. We understand what it's like to navigate between two worlds. We celebrate what makes us different. And we create space where you feel not just welcomed, but truly at home."
        imagePosition="right"
      />
      <AboutCTA />
      <Footer />
    </main>
  );
}
