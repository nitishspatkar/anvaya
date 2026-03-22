export default function ExperiencesSimple() {
  const experiences = [
    {
      id: 'hiking',
      title: 'Alpine hiking & mountain walks',
      description: 'From gentle forest walks to high-altitude trails. We know routes that change with seasons and valleys most visitors never see.'
    },
    {
      id: 'cheese',
      title: 'Cheese-making with alpine producers',
      description: 'Visit small alpine farms where cheesemakers work the same way their families have for generations. See how Swiss cheese is really made.'
    },
    {
      id: 'wine',
      title: 'Wine terraces & vineyard experiences',
      description: 'Explore terraced vineyards along Lake Geneva and the Rhone Valley. Taste wines most tourists never discover, straight from local vintners.'
    },
    {
      id: 'fondue',
      title: 'Swiss fondue & raclette evenings',
      description: 'More than just food. These meals are rituals—intimate, warm, shared around a table with stories.'
    },
    {
      id: 'barbecue',
      title: 'Lakeside & mountain barbecues',
      description: 'Swiss-style barbecues with mountain air, good conversation, and slow sunset views. Spots locals actually love.'
    },
    {
      id: 'shopping',
      title: 'Artisanal shops & local discoveries',
      description: 'Beyond tourist shops. Independent bookstores, vintage markets, craft makers, and studios where Bern\'s creative community lives.'
    },
    {
      id: 'hidden-towns',
      title: 'Hidden towns & local neighborhoods',
      description: 'Charming small towns with wooden houses, lake promenades, bakeries, and mountain backdrops. Places locals actually visit.'
    },
    {
      id: 'neighbouring',
      title: 'Cross-border day trips',
      description: 'The French Jura, Italian lakes, German Black Forest—each is just hours away and worth the journey.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-8 md:px-16">
        <div className="space-y-10 md:space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <h3 className="text-lg font-bold text-foreground">
                {exp.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-border">
          <p className="text-muted-foreground leading-relaxed">
            We also offer home-cooked Indian meals, dining recommendations, and other experiences tailored to what matters to you. Everything is a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
