export default function AboutHosts() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          We're Rajesh & Priya
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>We moved to Bern in 2018 for work and fell in love with living here. We spend weekends hiking the Alps, cooking, and exploring with friends.</p>
          
          <p>People kept asking us to show them around. They didn't want a tour guide—they wanted to know what our life actually feels like here. So we created Anvaya.</p>
          
          <p>That's what we share. Our life. Our stories. Our connection to this place.</p>
        </div>

        <div className="flex gap-12 mt-10 pt-10 border-t border-border">
          <div>
            <p className="text-3xl font-bold text-primary">6+</p>
            <p className="text-sm text-muted-foreground">Years here</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">100+</p>
            <p className="text-sm text-muted-foreground">Happy guests</p>
          </div>
        </div>
      </div>
    </section>
  );
}
