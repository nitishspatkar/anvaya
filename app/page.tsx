'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import InitialInquiry from '@/components/sections/initial-inquiry';
import AboutHosts from '@/components/sections/about-hosts';
import GalleryPreview from '@/components/sections/gallery-preview';
import Testimonial from '@/components/sections/testimonial';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <InitialInquiry />
        <AboutHosts />
        <GalleryPreview />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
