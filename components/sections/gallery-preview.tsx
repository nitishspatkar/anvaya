import Link from 'next/link';
import Image from 'next/image';
import { HOME_GALLERY_PREVIEW } from '@/lib/gallery-images'

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Accent Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mt-48" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 space-y-4">
          <p className="text-xs text-accent font-mono uppercase tracking-widest">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl">
            A Glimpse into Life Here
          </h2>
          <p className="text-lg text-muted-foreground">
            Stories captured through moments of authentic connection
          </p>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {HOME_GALLERY_PREVIEW.map((img, index) => {
            // Varied aspect ratios for visual interest
            const spans = index === 0 || index === 5 ? 'lg:col-span-2 lg:row-span-2' : '';
            
            return (
              <div 
                key={img.src} 
                className={`group relative overflow-hidden bg-card/50 border border-border/50 hover:border-accent/50 transition-all duration-300 ${spans}`}
              >
                <div className={`relative w-full ${spans ? 'aspect-square' : 'aspect-square'} overflow-hidden`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 4}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <p className="text-sm text-foreground font-medium">{img.alt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Gallery CTA */}
        <div className="border-t border-border pt-8 flex items-center justify-between">
          <p className="text-muted-foreground text-sm">
            Explore {HOME_GALLERY_PREVIEW.length} more moments from our life
          </p>
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-3 text-accent font-medium hover:gap-4 transition-all group"
          >
            View Full Gallery
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
