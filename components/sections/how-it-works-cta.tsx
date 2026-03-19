import Link from 'next/link';

export default function HowItWorksCTA() {
  return (
    <section className="w-full bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Let&apos;s start the conversation
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Ready to explore Switzerland with us? Step one is just five minutes away.
          </p>
          <Link href="/request-trip" className="inline-block bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition">
            Request a Trip
          </Link>
        </div>
      </div>
    </section>
  );
}
