import Link from 'next/link';
import Image from 'next/image';
import { HOME_GALLERY_PREVIEW } from '@/lib/gallery-images'

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Our life in the Alps
        </h2>
        <p className="text-muted-foreground mb-12">Real scenes from how we spend our days.</p>

        {/* Simple uniform grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {HOME_GALLERY_PREVIEW.slice(0, 6).map((img, index) => (
            <div 
              key={img.src}
              className="relative w-full aspect-square overflow-hidden bg-muted hover:opacity-80 transition"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <Link 
          href="/gallery"
          className="text-primary font-medium hover:opacity-80 transition"
        >
          View all photos →
        </Link>
      </div>
    </section>
  );
}
