import Link from 'next/link'

export default function InitialInquiry() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-2xl mx-auto px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          How it works
        </h2>
        
        <div className="space-y-8 mb-10">
          <div>
            <h3 className="font-bold text-foreground mb-2">1. Share your interests</h3>
            <p className="text-muted-foreground">Tell us what excites you. What pace you like. What matters to you.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-2">2. We design your trip</h3>
            <p className="text-muted-foreground">We create a custom itinerary with hikes, meals, and experiences tailored to you.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-2">3. Max 2 guests</h3>
            <p className="text-muted-foreground">We keep it intimate. Just you, us, and the Alps.</p>
          </div>
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
