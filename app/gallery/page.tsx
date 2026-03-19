import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { GALLERY_IMAGES } from '@/lib/gallery-images'

export const metadata: Metadata = {
  title: 'Gallery | Anvaya',
  description: 'Moments from our hikes, towns, and alpine experiences in Switzerland.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-28 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10 md:mb-14">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of places we love across Bern, the Alps, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img, index) => (
              <div key={`${img.src}-${index}`} className="relative aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  priority={index < 8}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
