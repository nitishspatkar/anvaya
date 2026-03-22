export default function Hero() {
  return (
    <section className="w-full">
      {/* Simple hero - no image, just clean content */}
      <div className="bg-background px-8 md:px-16 py-20 md:py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            We'll show you the Switzerland we call home
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            We live in Bern and love sharing our life here. You'll explore the Alps, eat great food, and get to know Switzerland the way locals do.
          </p>

          <a 
            href="/request-trip"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-80 transition"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
