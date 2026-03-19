export default function HowItWorks() {
  const steps = [
    { number: '01', label: 'Browse' },
    { number: '02', label: 'Submit Interest' },
    { number: '03', label: 'Personal Call' },
    { number: '04', label: 'Experience Switzerland' },
  ];

  return (
    <section id="how" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col md:border-r border-border last:md:border-r-0">
              <div className="px-6 md:px-8 py-8 md:py-12 flex flex-col items-start">
                <div className="mb-4">
                  <span className="font-serif text-5xl md:text-6xl font-bold text-primary/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                  {step.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Arrow Indicator */}
        <div className="mt-8 md:mt-12 flex justify-center md:justify-start">
          <div className="hidden md:block text-primary text-2xl">→ Process flows seamlessly</div>
          <div className="md:hidden text-primary text-2xl">↓ Sequential process</div>
        </div>
      </div>
    </section>
  );
}
