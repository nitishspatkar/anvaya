export default function Testimonial() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl px-8 md:px-12">
        <div className="space-y-12">
          {/* Quote mark - large and subtle */}
          <div className="text-6xl md:text-8xl font-serif text-secondary/15 leading-none">
            "
          </div>

          {/* Quote */}
          <blockquote className="space-y-8">
            <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              This wasn't just a trip—it was coming home to a place I'd never been before. Rajesh and Priya made us feel like locals, not tourists.
            </p>
          </blockquote>

          {/* Attribution with subtle separation */}
          <div className="space-y-6 pt-8 border-t border-border">
            <div>
              <p className="font-sans font-medium text-foreground">Anjali Singh</p>
              <p className="font-sans text-sm text-muted-foreground">Mumbai, India</p>
            </div>
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
              Verified guest experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
