export default function PhilosophyHighlight() {
  const philosophies = [
    {
      title: "Friends, Not Guides",
      description: "We're here to share our world with you, not to be your tour operators."
    },
    {
      title: "Depth Over Breadth",
      description: "Two guests at a time. Real conversations. Genuine connections."
    },
    {
      title: "Your Story Matters",
      description: "We craft experiences around you, not the other way around."
    }
  ];

  return (
    <section className="w-full bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Our Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {philosophies.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-serif font-bold text-lg">
                    {String(index + 1)}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
