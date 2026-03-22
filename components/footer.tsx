import Link from 'next/link';
import Logo from '@/components/logo'

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12 md:mb-16">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Logo
              className="mb-4"
              latinClassName="font-bold text-lg text-accent"
              devanagariClassName="text-xs text-muted-foreground tracking-wide"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated travel experiences for those who seek authentic connection to place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-6 uppercase tracking-widest">Navigation</h4>
            <nav className="space-y-3">
              <Link href="/experiences" className="block text-sm text-muted-foreground hover:text-accent transition">
                Experiences
              </Link>
              <Link href="/gallery" className="block text-sm text-muted-foreground hover:text-accent transition">
                Gallery
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-accent transition">
                Our Story
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-6 uppercase tracking-widest">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@alpine.ch" className="block text-sm text-muted-foreground hover:text-accent transition">
                hello@alpine.ch
              </a>
              <a href="https://wa.me/41123456789" className="block text-sm text-muted-foreground hover:text-accent transition">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-6 uppercase tracking-widest">Location</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bern,<br />
              Switzerland
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-muted-foreground">
              © 2024 Anvaya Hosting. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-accent transition">
                Privacy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-accent transition">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
