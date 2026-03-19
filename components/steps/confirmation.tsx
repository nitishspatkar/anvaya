'use client'

import React from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function ConfirmationScreen() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen pt-20 pb-16">
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-2xl text-center space-y-8">
            {/* Main Message */}
            <div className="space-y-4">
              <div className="text-6xl">✓</div>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground">
                Thank you!
              </h1>
              <p className="text-lg text-muted-foreground">
                We've received your inquiry and we're excited to learn more about your travel dreams.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 space-y-3">
              <h2 className="font-serif text-xl text-foreground">
                What happens next?
              </h2>
              <p className="text-foreground text-sm leading-relaxed">
                We'll be in touch shortly to schedule a personal call. This is where the real conversation begins—we'll listen to your dreams, answer your questions, and design a trip that feels authentically Swiss and personally warm.
              </p>
            </div>

            {/* Call to Action Links */}
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                In the meantime, feel free to explore more:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/experiences">
                  <Button variant="outline" size="lg">
                    Explore Experiences
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" size="lg">
                    View Our Gallery
                  </Button>
                </Link>
              </div>
            </div>

            {/* Back Home */}
            <div className="pt-8 border-t border-border">
              <Link href="/">
                <Button variant="ghost" size="lg">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
