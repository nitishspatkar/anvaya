import Link from 'next/link';

export default function ExperiencePreview() {
  const experiences = [
    {
      title: 'Alpine Cheese-Making',
      teaser: 'Craft traditional Swiss cheese in a family-run Alpine dairy.',
      image: 'bg-gradient-to-br from-secondary/40 to-secondary/20',
    },
    {
      title: 'Vineyard Walk at Lavaux',
      teaser: 'Stroll UNESCO terraced vineyards overlooking Lake Geneva.',
      image: 'bg-gradient-to-br from-muted/60 to-muted/40',
    },
    {
      title: 'Igloo Building',
      teaser: 'Build your own igloo and dine under Alpine stars.',
      image: 'bg-gradient-to-br from-muted/50 to-muted/30',
    },
  ];

  return (
    <section id="experiences" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Curated Experiences
          </h2>
          <p className="text-lg text-muted-foreground">
            From the Alps to Alpine traditions
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-background overflow-hidden hover:shadow-lg transition">
              {/* Image Placeholder */}
              <div className={`w-full aspect-square ${exp.image} flex items-center justify-center`} />
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {exp.teaser}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Link */}
        <div className="border-t border-border pt-8">
          <Link href="#" className="text-primary font-medium hover:underline text-lg inline-flex items-center gap-2">
            See all experiences →
          </Link>
        </div>
      </div>
    </section>
  );
}
