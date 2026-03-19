'use client'

import React, { useState } from 'react'
import { FormData } from '@/components/sections/request-trip-wizard'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Car, Train, Loader2 } from 'lucide-react'

interface Step2Props {
  data: FormData
  onNext: (data: Partial<FormData>) => void
  onBack: () => void
}

export default function Step2Transport({ data, onNext, onBack }: Step2Props) {
  const [transport, setTransport] = useState(data.transport)
  const [airportPickup, setAirportPickup] = useState(data.airportPickup)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!transport) return
    onNext({
      transport,
      airportPickup,
    })
  }

  const options = [
    {
      value: 'we-drive',
      label: 'We drive you',
      description: 'Your hosts provide transport',
      icon: Car,
    },
    {
      value: 'self-drive',
      label: 'Self-drive rental',
      description: 'You rent a car',
      icon: Car,
    },
    {
      value: 'mix',
      label: 'Mix of both',
      description: 'Some trips with hosts, some self-drive',
      icon: Car,
    },
    {
      value: 'public',
      label: 'SBB & public transport',
      description: 'Train, bus, and local transport',
      icon: Train,
    },
    {
      value: 'unsure',
      label: 'Not sure yet',
      description: 'We will discuss options together',
      icon: Loader2,
    },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-3">
        <Label className="text-base font-medium block">
          How would you like to get around?
        </Label>
        <div className="space-y-2">
          {options.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setTransport(option.value)}
                className={`w-full p-4 rounded-lg border-2 transition text-left ${
                  transport === option.value
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

      {/* Airport Pickup */}
      {transport && transport !== 'unsure' && (
        <div className="space-y-3 p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <Label className="text-base font-medium flex items-center gap-3">
            <Checkbox
              checked={airportPickup}
              onCheckedChange={(checked) => setAirportPickup(checked as boolean)}
              id="airport"
            />
            <label htmlFor="airport" className="cursor-pointer">
              We'd like airport pickup and/or dropoff
            </label>
          </Label>
          <p className="text-sm text-muted-foreground">
            We can arrange transport from Zurich airport (the nearest major hub) to Bern and back.
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
          disabled={!transport}
          size="lg"
          className="ml-auto"
        >
          Next
        </Button>
      </div>
    </form>
  )
}
