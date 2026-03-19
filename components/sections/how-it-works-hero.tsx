export default function HowItWorksHero() {
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
            How It Works
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            A simple, four-step journey from curiosity to your perfect Switzerland experience.
          </p>
        </div>
      </div>
    </section>
  );
}
