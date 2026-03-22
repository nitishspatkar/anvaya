import Link from 'next/link';
import Image from 'next/image';
import { HOME_GALLERY_PREVIEW } from '@/lib/gallery-images'

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="max-w-5xl px-8 md:px-12">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Our life in the Alps
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Not filtered moments. Real scenes from how we spend our days.
            </p>
          </div>

          {/* Asymmetrical Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {HOME_GALLERY_PREVIEW.map((img, index) => {
              // Asymmetrical spans for editorial feel
              let gridClass = '';
              if (index === 0) gridClass = 'lg:col-span-2 lg:row-span-2';
              else if (index === 4) gridClass = 'lg:col-span-2';
              
              return (
                <div 
                  key={img.src}
                  className={`group relative overflow-hidden rounded-sm ${gridClass}`}
                >
                  <div className={`relative w-full ${index === 0 || index === 4 ? 'aspect-square' : 'aspect-square'} overflow-hidden bg-muted`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={index < 4}
                    />
                    
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* View gallery link */}
          <div className="border-t border-border pt-12">
            <Link 
              href="/gallery"
              className="inline-block text-primary font-sans font-medium hover:opacity-80 transition-opacity duration-400"
            >
              View all photos →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
