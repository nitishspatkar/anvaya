export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero Image Placeholder */}
      <div className="w-full h-96 md:h-[500px] bg-gradient-to-b from-muted via-muted/80 to-background relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 500">
            <path d="M0,250 Q300,100 600,150 T1200,200 L1200,500 L0,500 Z" fill="#2C5F3E" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-24 relative z-10">
        <div className="bg-background rounded-none p-8 md:p-12 mb-8 md:mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            We&apos;ll show you the Switzerland we call home
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl">
            We're a couple with Indian roots living in Bern who love sharing our adopted home. We are not tour guides, but we can show you many possibilities—some might interest you, some might not. That's the conversation we want to have.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-4">
            <span className="font-medium text-foreground">This is how we work:</span> Tell us what all you're looking for, what's meaningful to you. If the timing and vibe feel right, we'll reach out to dig deeper. Once we understand each other, we'll craft a cost estimate. If it works for you, we move forward together. We're selective about who we invite—not because we're exclusive, but because this is how we create meaningful experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
