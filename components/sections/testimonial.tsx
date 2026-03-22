export default function Testimonial() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Layered background accents */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-secondary/6 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 md:px-8 relative z-10">
        {/* Premium Testimonial Card */}
        <div className="border border-border/40 bg-card/30 backdrop-blur p-12 md:p-16 space-y-10">
          {/* Quote Mark with Accent Color */}
          <div className="flex gap-4">
            <div className="text-6xl md:text-7xl text-secondary/30 font-serif leading-none">
              "
            </div>
          </div>

          {/* Quote */}
          <blockquote className="space-y-4">
            <p className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
              This wasn&apos;t just a trip—it was coming home to a place I&apos;d never been before. Rajesh and Priya made us feel like locals, not tourists.
            </p>
          </blockquote>

          {/* Attribution with Premium Avatar */}
          <div className="border-t border-border/40 pt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/30 to-accent/20 flex items-center justify-center border border-secondary/40">
              <span className="text-lg font-bold text-secondary">AS</span>
            </div>
            <div>
              <p className="font-medium text-foreground">Anjali Singh</p>
              <p className="text-sm text-muted-foreground">Mumbai, India</p>
            </div>
          </div>

          {/* Trust Signal */}
          <div className="border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
              Verified Guest Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
