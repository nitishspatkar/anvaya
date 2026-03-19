import Link from 'next/link'

export default function InitialInquiry() {
  return (
    <section className="py-16 md:py-24 bg-background border-y border-border">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="space-y-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
            Tell us what you&apos;re looking for
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We now use one shared request flow everywhere so the experience stays consistent no
            matter where you start.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            This is not a booking. It&apos;s the start of a conversation where we learn your
            preferences and see if we&apos;re the right fit.
          </p>
          <div className="pt-2">
            <Link
              href="/request-trip"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition"
            >
              Request a Trip
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
