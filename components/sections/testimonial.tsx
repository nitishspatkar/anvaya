export default function Testimonial() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 md:px-8 relative z-10">
        {/* Testimonial Card */}
        <div className="border border-border bg-white p-12 md:p-16 space-y-10">
          {/* Quote Mark */}
          <div className="flex gap-4">
            <div className="text-6xl md:text-7xl text-secondary/20 font-serif leading-none">
              "
            </div>
          </div>

          {/* Quote */}
          <blockquote className="space-y-4">
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              This wasn't just a trip—it was coming home to a place I'd never been before. Rajesh and Priya made us feel like locals, not tourists.
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="border-t border-border pt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center border border-secondary/20">
              <span className="text-lg font-bold text-secondary">AS</span>
            </div>
            <div>
              <p className="font-medium text-foreground">Anjali Singh</p>
              <p className="text-sm text-muted-foreground">Mumbai, India</p>
            </div>
          </div>

          {/* Trust Signal */}
          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
              Verified Guest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
