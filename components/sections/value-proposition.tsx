export default function ValueProposition() {
  const values = [
    {
      title: 'Insider Local Access',
      description: 'Learn secrets only locals know—family-run restaurants, hidden hiking trails, and after-hours Alpine traditions.',
    },
    {
      title: 'A Cultural Bridge',
      description: 'Meet fellow Indians who are building their lives in Switzerland. Share stories, perspectives, and the comfort of shared roots.',
    },
    {
      title: 'Intimate Journeys',
      description: 'Never more than 2 guests at a time. Fully personalized itineraries crafted just for you.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="space-y-12">
          {values.map((value, index) => (
            <div key={index} className="border-b border-border pb-12 last:border-b-0">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-foreground leading-relaxed text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
