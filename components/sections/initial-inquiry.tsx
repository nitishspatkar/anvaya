import Link from 'next/link'

export default function InitialInquiry() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-2xl mx-auto px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          How it works
        </h2>
        
        <div className="space-y-6 mb-10 text-muted-foreground leading-relaxed">
          <p>
            We start by learning what matters to you. Your interests, your pace, what kind of experiences you're really looking for. There's no template here—we just talk.
          </p>
          
          <p>
            From that conversation, we design something custom. Hikes through valleys you've never heard of, meals with people who live here, moments that actually connect you to Switzerland.
          </p>
          
          <p>
            We keep trips small—just you and us. That's when the real conversations happen, when you actually feel like part of life here instead of passing through.
          </p>
        </div>

        <Link
          href="/request-trip"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-80 transition"
        >
          Tell us your story
        </Link>
      </div>
    </section>
  )
}
