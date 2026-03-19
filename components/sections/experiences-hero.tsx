export default function ExperiencesHero() {
  return (
    <section className="relative w-full">
      {/* Hero Image Placeholder */}
      <div className="w-full h-80 md:h-96 bg-gradient-to-b from-muted via-muted/80 to-background relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <path d="M0,200 Q300,50 600,100 T1200,150 L1200,400 L0,400 Z" fill="#2C5F3E" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-20 relative z-10">
        <div className="bg-background rounded-none p-8 md:p-12 mb-8">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Experiences
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Every experience is chosen because we love it ourselves
          </p>
        </div>
      </div>
    </section>
  );
}
