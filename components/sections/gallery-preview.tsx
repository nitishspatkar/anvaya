import Link from 'next/link';

export default function GalleryPreview() {
  const images = [
    { aspect: 'aspect-square', gradient: 'from-secondary/40 to-secondary/20' },
    { aspect: 'aspect-[4/5]', gradient: 'from-muted/60 to-muted/40' },
    { aspect: 'aspect-square', gradient: 'from-muted/50 to-muted/30' },
    { aspect: 'aspect-[5/4]', gradient: 'from-secondary/30 to-muted/30' },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            A Glimpse into Life Here
          </h2>
          <p className="text-lg text-muted-foreground">
            Stories captured through moments
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-max gap-4 md:gap-6 mb-12">
          {images.map((img, index) => (
            <div
              key={index}
              className={`${img.aspect} bg-gradient-to-br ${img.gradient} rounded-none flex items-center justify-center`}
            >
              <div className="text-center opacity-50">
                <span className="text-4xl">🏔️</span>
              </div>
            </div>
          ))}
        </div>

        {/* View Gallery Link */}
        <div className="border-t border-border pt-8">
          <Link href="#" className="text-primary font-medium hover:underline text-lg inline-flex items-center gap-2">
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
