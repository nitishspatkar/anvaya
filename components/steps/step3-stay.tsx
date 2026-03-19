'use client'

import React, { useState } from 'react'
import { FormData } from '@/components/sections/request-trip-wizard'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Home, MapPin } from 'lucide-react'

interface Step3Props {
  data: FormData
  onNext: (data: Partial<FormData>) => void
  onBack: () => void
}

export default function Step3Stay({ data, onNext, onBack }: Step3Props) {
  const [stay, setStay] = useState(data.stay)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!stay) return
    onNext({ stay })
  }

  const options = [
    {
      value: 'at-home',
      label: 'At your home in Bern',
      description: 'Stay with your hosts',
      icon: Home,
    },
    {
      value: 'separate',
      label: 'Separate accommodation',
      description: 'In a nearby hotel or guesthouse',
      icon: MapPin,
    },
    {
      value: 'either',
      label: 'Open to either',
      description: 'Flexible based on availability',
      icon: Home,
    },
    {
      value: 'unsure',
      label: 'Not sure yet',
      description: 'Let\'s discuss your comfort level',
      icon: MapPin,
    },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <Label className="text-base font-medium block">
          Where would you like to stay?
        </Label>
        <div className="space-y-2">
          {options.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setStay(option.value)}
                className={`w-full p-4 rounded-lg border-2 transition text-left ${
                  stay === option.value
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background hover:border-border/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Icon className="size-5 text-secondary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">
                      {option.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Helper text */}
      {stay === 'at-home' && (
        <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <p className="text-sm text-foreground">
            Staying at our home means you'll be in the heart of Bern, part of our daily life. You'll have your own private room, and we'll share meals and experiences together. It's intimate and personal—the whole point of this service.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3 pt-8 border-t border-border">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          type="submit"
          disabled={!stay}
          size="lg"
          className="ml-auto"
        >
          Next
        </Button>
      </div>
    </form>
  )
}
