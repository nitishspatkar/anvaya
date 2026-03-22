export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-2xl mx-auto px-8 md:px-16">
        <blockquote className="space-y-6">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            "This wasn't just a trip—it was coming home to a place I'd never been before. Rajesh and Priya made us feel like locals, not tourists."
          </p>
        </blockquote>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="font-medium text-foreground">Anjali Singh</p>
          <p className="text-sm text-muted-foreground">Mumbai, India</p>
        </div>
      </div>
    </section>
  );
}
