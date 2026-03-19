'use client'

import React, { useState } from 'react'
import { FormData } from '@/components/sections/request-trip-wizard'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

interface Step7Props {
  data: FormData
  onSubmit: (data: Partial<FormData>) => void
  onBack: () => void
}

export default function Step7Review({ data, onSubmit, onBack }: Step7Props) {
  const [email, setEmail] = useState(data.email)
  const [whatsapp, setWhatsapp] = useState(data.whatsapp)
  const [consent, setConsent] = useState(data.consent)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !whatsapp || !consent) return
    onSubmit({
      email,
      whatsapp,
      consent,
    })
  }

  const isComplete = email && whatsapp && consent

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Summary Section 1: About You */}
      <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg text-foreground">About You</h3>
          <button
            type="button"
            className="text-primary text-sm hover:underline"
            onClick={onBack}
          >
            Edit
          </button>
        </div>
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="text-muted-foreground">Name</dt>
            <dd className="text-foreground font-medium">{data.fullName}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Location</dt>
            <dd className="text-foreground font-medium">{data.city}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Group size</dt>
            <dd className="text-foreground font-medium">{data.groupSize} person(ies)</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Travel time</dt>
            <dd className="text-foreground font-medium">
              {data.season} {data.season !== 'flexible' ? ` (${data.year})` : ''}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Duration</dt>
            <dd className="text-foreground font-medium">{data.duration}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Heard about us via</dt>
            <dd className="text-foreground font-medium">{data.source}</dd>
          </div>
        </dl>
      </div>

      {/* Summary Section 2: Travel Details */}
      <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-border">
        <h3 className="font-serif text-lg text-foreground">Travel Details</h3>
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="text-muted-foreground">Transport</dt>
            <dd className="text-foreground font-medium">{data.transport}</dd>
          </div>
          {data.airportPickup && (
            <div>
              <dt className="text-muted-foreground">Airport service</dt>
              <dd className="text-foreground font-medium">Yes, we need pickup/dropoff</dd>
            </div>
          )}
          <div>
            <dt className="text-muted-foreground">Accommodation</dt>
            <dd className="text-foreground font-medium">{data.stay}</dd>
          </div>
        </dl>
      </div>

      {/* Summary Section 3: Preferences */}
      <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-border">
        <h3 className="font-serif text-lg text-foreground">Preferences</h3>
        {data.experiences.length > 0 && (
          <div>
            <dt className="text-muted-foreground text-sm mb-2">Experiences</dt>
            <dd className="flex flex-wrap gap-2">
              {data.experiences.map((exp) => (
                <span
                  key={exp}
                  className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                >
                  {exp}
                </span>
              ))}
            </dd>
          </div>
        )}
        {data.meals.length > 0 && (
          <div>
            <dt className="text-muted-foreground text-sm mb-2">Meals</dt>
            <dd className="flex flex-wrap gap-2">
              {data.meals.map((meal) => (
                <span
                  key={meal}
                  className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs rounded"
                >
                  {meal}
                </span>
              ))}
            </dd>
          </div>
        )}
        {data.dietaryNeeds.length > 0 && (
          <div>
            <dt className="text-muted-foreground text-sm mb-2">Dietary needs</dt>
            <dd className="flex flex-wrap gap-2">
              {data.dietaryNeeds.map((need) => (
                <span
                  key={need}
                  className="inline-block px-2 py-1 bg-muted text-foreground text-xs rounded"
                >
                  {need}
                </span>
              ))}
            </dd>
          </div>
        )}
      </div>

      {/* Contact Information */}
      <div className="space-y-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
        <h3 className="font-serif text-lg text-foreground">Contact Information</h3>

        <div className="space-y-3">
          <div>
            <Label htmlFor="email" className="text-base font-medium">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="h-10 text-base mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="whatsapp" className="text-base font-medium">
              WhatsApp number
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="+91 98765 43210"
              className="h-10 text-base mt-2"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Include country code (e.g., +91 for India)
            </p>
          </div>
        </div>
      </div>

      {/* Consent */}
      <div className="space-y-3">
        <Label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked as boolean)}
            id="consent"
            className="mt-1"
          />
          <span className="text-sm text-foreground">
            I consent to be contacted by Anvaya via email and WhatsApp to discuss my trip. I understand this is not a booking confirmation.
          </span>
        </Label>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 pt-8 border-t border-border">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          type="submit"
          disabled={!isComplete}
          size="lg"
          className="ml-auto"
        >
          Start the Conversation
        </Button>
      </div>
    </form>
  )
}
