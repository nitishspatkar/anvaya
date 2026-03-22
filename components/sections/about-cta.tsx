import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-2xl mx-auto px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Curious?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let's start a conversation. No fixed packages. No pressure.
        </p>
        <Link href="/request-trip" className="inline-block bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-80 transition">
          Request a Trip
        </Link>
      </div>
    </section>
  );
}
