export default function Testimonial() {
  return (
    <section className="py-20 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Accent Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        {/* Testimonial Card */}
        <div className="border border-border/50 bg-background/50 backdrop-blur p-10 md:p-16 space-y-8">
          {/* Quote Mark */}
          <div className="flex gap-4">
            <div className="text-4xl md:text-5xl text-accent/40 font-serif">
              "
            </div>
            <div className="flex-1" />
          </div>

          {/* Quote */}
          <blockquote className="space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              This wasn&apos;t just a trip—it was coming home to a place I&apos;d never been before. Rajesh and Priya made us feel like locals, not tourists.
            </p>
          </blockquote>

          {/* Attribution with Accent */}
          <div className="border-t border-border/50 pt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-lg font-bold text-accent">AS</span>
            </div>
            <div>
              <p className="font-medium text-foreground">Anjali Singh</p>
              <p className="text-sm text-muted-foreground">Mumbai, India</p>
            </div>
          </div>

          {/* Trust Signal */}
          <div className="border-t border-border/50 pt-8">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
              ⭐ Verified Experience Guest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
