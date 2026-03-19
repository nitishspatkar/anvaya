import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="w-full bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Curious?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Let&apos;s start a conversation. No fixed packages. No pressure. Just a chance to see if we&apos;re the right fit for each other.
          </p>
          <Link href="/request-trip" className="inline-block bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition">
            Request a Trip
          </Link>
        </div>
      </div>
    </section>
  );
}
