import Link from 'next/link';
import Logo from '@/components/logo'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo
              className="mb-4"
              latinClassName="font-serif text-xl font-bold text-primary"
              devanagariClassName="text-xs text-muted-foreground tracking-wide"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience Switzerland through the eyes of locals who call it home.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <nav className="space-y-2">
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary transition">
                Experiences
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary transition">
                Gallery
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary transition">
                Our Story
              </Link>
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:hello@alpine.ch" className="block text-sm text-muted-foreground hover:text-primary transition">
                hello@alpine.ch
              </a>
              <a href="https://wa.me/41123456789" className="block text-sm text-muted-foreground hover:text-primary transition">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Location</h4>
            <p className="text-sm text-muted-foreground">
              Bern, Switzerland
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © 2024 Anvaya Hosting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
