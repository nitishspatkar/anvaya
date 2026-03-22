import Link from 'next/link';
import Image from 'next/image';
import { HOME_GALLERY_PREVIEW } from '@/lib/gallery-images'

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-secondary" />
            <span className="text-xs font-mono text-secondary uppercase tracking-widest">Moments</span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl">
            Our life in the Alps
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            What daily life looks like here. Not filtered. Not performed. Real.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-16">
          {HOME_GALLERY_PREVIEW.map((img, index) => {
            const spans = index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2' : '';
            
            return (
              <div 
                key={img.src} 
                className={`group relative overflow-hidden border border-border hover:border-secondary/40 transition-all duration-300 cursor-pointer ${spans}`}
              >
                <div className={`relative w-full ${spans ? 'aspect-square' : 'aspect-square'} overflow-hidden bg-muted/20`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 4}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <p className="text-sm font-medium text-foreground">{img.alt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div className="border-t border-border pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-muted-foreground text-sm">
              {HOME_GALLERY_PREVIEW.length} moments from living here
            </p>
          </div>
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-3 text-secondary font-medium hover:text-secondary/80 transition group"
          >
            View All Photos
            <span className="group-hover:translate-x-2 transition duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
