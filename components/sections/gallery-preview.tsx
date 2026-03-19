import Link from 'next/link';
import Image from 'next/image';

export default function GalleryPreview() {
  const images = [
    { src: '/gallery/Beatenberg.jpg', alt: 'Mountain panorama at Beatenberg' },
    { src: '/gallery/Bern_Spring.jpg', alt: 'Spring view in Bern' },
    { src: '/gallery/Dallenwil.jpg', alt: 'Scenic landscape in Dallenwil' },
    { src: '/gallery/Gurten_Bern.jpg', alt: 'Gurten hillside in Bern' },
    { src: '/gallery/Hikes_1_Giswil.jpg', alt: 'Hiking trail near Giswil' },
    { src: '/gallery/Hikes_2_Backalpsee.jpg', alt: 'Backalpsee hike and alpine lake' },
    { src: '/gallery/Hikes_3_Kandersteg.jpg', alt: 'Kandersteg mountain hike' },
    { src: '/gallery/Hikes_4_Zermatt.jpg', alt: 'Zermatt mountain views' },
    { src: '/gallery/Hoher_Kasten.jpg', alt: 'Viewpoint near Hoher Kasten' },
    { src: '/gallery/Niesen.jpg', alt: 'Niesen mountain ridge' },
    { src: '/gallery/Rigi_Winter.jpg', alt: 'Winter landscape at Rigi' },
    { src: '/gallery/Seealpsee.jpg', alt: 'Seealpsee lake in the Alps' },
    { src: '/gallery/Thun.jpg', alt: 'Lakeside scene in Thun' },
    { src: '/gallery/Val_de-Charmey.jpg', alt: 'Val-de-Charmey alpine valley' },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-4 md:gap-6 mb-12">
          {images.map((img, index) => (
            <div key={img.src} className="relative aspect-square overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                priority={index < 4}
              />
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
