import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-bleed hero with asymmetrical layout */}
      <div className="relative w-full min-h-screen md:min-h-[600px] flex items-end">
        {/* Background image - full bleed */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-alps.jpg"
            alt="Swiss Alps landscape"
            fill
            className="object-cover"
            priority
          />
          {/* Alpine Mist overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content - asymmetrical positioning */}
        <div className="relative z-10 w-full max-w-5xl px-8 md:px-12 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              We'll show you the Switzerland we call home
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              Two neighbors. One beautiful country. We live here, work here, and we want to share it with you.
            </p>

            <a 
              href="/request-trip"
              className="inline-block bg-primary text-primary-foreground font-sans font-medium px-8 py-3 hover:opacity-90 transition-opacity duration-400"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>

      {/* Tagline section below hero */}
      <div className="bg-background px-8 md:px-12 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Anvaya</span> is a Sanskrit word for connection—the thread that weaves people and stories together. For us, it's about connection to place, to people, and to authentic experience.
          </p>
        </div>
      </div>
    </section>
  );
}
