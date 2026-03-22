import Link from 'next/link';
import Image from 'next/image';

export default function AboutHosts() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-5xl px-8 md:px-12">
        <div className="space-y-16">
          {/* Two-column asymmetrical layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Image with asymmetrical placement */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-sm order-2 lg:order-1">
              <Image
                src="/images/about-hosts.jpg"
                alt="The hosts in the Alps"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  We're Rajesh & Priya
                </h2>
              </div>

              <div className="space-y-6">
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  We moved to Bern in 2018 for work and never looked back. We're neighbors first. Hosts second.
                </p>

                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  Over the years, friends kept asking us to show them around. They didn't want a tour guide script—they wanted to understand what it actually feels like to live here. So we started Anvaya.
                </p>

                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  We spend our weekends hiking every corner of the Alps. We cook. We explore. We show up as ourselves. That's the experience we share.
                </p>
              </div>

              <div className="flex items-center gap-8 pt-6 border-t border-border">
                <div>
                  <p className="font-serif text-4xl font-bold text-primary">6+</p>
                  <p className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Years living here</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-primary">100+</p>
                  <p className="font-sans text-sm text-muted-foreground uppercase tracking-wider">Guests hosted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
