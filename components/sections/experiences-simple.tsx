export default function ExperiencesSimple() {
  const experiences = [
    {
      id: 'hiking',
      title: 'Alpine trails & mountain walks',
      description: 'Switzerland has countless breathtaking hikes—from gentle forest walks to high-altitude trails. We know the ones that take your breath away, the lesser-known valleys, and routes that change with the seasons.'
    },
    {
      id: 'cheese',
      title: 'Cheese-making with alpine producers',
      description: 'There are over 450 varieties of Swiss cheese. We can take you to small alpine dairy farms where master cheesemakers work the same way their families have for generations.'
    },
    {
      id: 'wine',
      title: 'Wine terraces & winery experiences',
      description: 'Hidden along Lake Geneva and the Rhone Valley are some of Europe\'s most stunning terraced vineyards. Visit where local vintners work, taste wines most tourists never discover.'
    },
    {
      id: 'fondue',
      title: 'Swiss fondue & raclette',
      description: 'More than just food—these meals are rituals. We cook them at home, the way it\'s meant to be: intimate, warm, and shared around a table with stories.'
    },
    {
      id: 'shopping',
      title: 'Shopping & artisanal discoveries',
      description: 'Beyond the tourist shops. We know the independent bookstores, vintage markets, craft makers, and local ateliers where Bern\'s creative community thrives.'
    },
    {
      id: 'neighbouring',
      title: 'Short trips to neighbouring countries',
      description: 'If you have enough days, we can venture across borders. The French Jura, Italian lakes, German Black Forest—each is just hours away and worth the journey.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-3">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                {exp.title}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note about other offerings */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border">
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Beyond these, we can also offer home-cooked Indian meals, dining recommendations at local restaurants, and other experiences tailored to what matters to you. Everything is a conversation—we work together to create something meaningful.
          </p>
        </div>
      </div>
    </section>
  );
}
