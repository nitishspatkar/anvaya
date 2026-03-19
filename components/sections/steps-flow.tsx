export default function StepsFlow() {
  const steps = [
    {
      number: 1,
      title: "Browse Experiences",
      description: "Explore our curated list of experiences—from cheese-making in mountain villages to vineyard walks, from igloo building to intimate fondue dinners."
    },
    {
      number: 2,
      title: "Fill Our Trip Form",
      description: "Tell us about yourself, your travel dates, how you like to move around Switzerland, and what draws you. Takes about 5 minutes."
    },
    {
      number: 3,
      title: "Personal Call",
      description: "We schedule a conversation to understand your vision. This is where we get to know you and see if we're the right fit for each other."
    },
    {
      number: 4,
      title: "We Craft Your Trip",
      description: "Based on our conversation, we design your Switzerland experience. Tailored to you. Flexible. Authentic. Ready to be lived."
    }
  ];

  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Mobile Layout - Vertical */}
        <div className="md:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                  <span className="font-serif text-4xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden md:flex justify-between items-center mt-12 absolute inset-x-0 top-1/2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex-1 h-0.5 bg-border mx-2" />
          ))}
        </div>
      </div>
    </section>
  );
}
