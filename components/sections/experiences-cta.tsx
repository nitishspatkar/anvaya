import Link from 'next/link';

export default function ExperiencesCTA() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Don&apos;t see exactly what you&apos;re looking for?
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          Tell us what captures your imagination — we&apos;ll build around you.
        </p>

        <Link href="/request-trip" className="inline-block bg-primary text-primary-foreground px-8 md:px-10 py-3 md:py-4 font-medium text-base md:text-lg hover:bg-primary/90 transition">
          Request a Trip
        </Link>
      </div>
    </section>
  );
}
