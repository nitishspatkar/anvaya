export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center">
          {/* Quote Mark */}
          <div className="text-6xl text-primary/20 mb-6">"</div>

          {/* Quote */}
          <blockquote>
            <p className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              This wasn&apos;t just a trip—it was coming home to a place I&apos;d never been before. Rajesh and Priya made us feel like locals, not tourists.
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="mt-8">
            <p className="font-medium text-foreground mb-1">Anjali Singh</p>
            <p className="text-muted-foreground">Mumbai, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
