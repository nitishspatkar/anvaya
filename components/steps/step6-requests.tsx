'use client'

import React, { useState } from 'react'
import { FormData } from '@/components/sections/request-trip-wizard'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface Step6Props {
  data: FormData
  onNext: (data: Partial<FormData>) => void
  onBack: () => void
}

export default function Step6Requests({ data, onNext, onBack }: Step6Props) {
  const [specialRequests, setSpecialRequests] = useState<string[]>(data.specialRequests)
  const [regionsInMind, setRegionsInMind] = useState(data.regionsInMind)
  const [anythingElse, setAnythingElse] = useState(data.anythingElse)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({
      specialRequests,
      regionsInMind,
      anythingElse,
    })
  }

  const toggleRequest = (value: string) => {
    setSpecialRequests((prev) =>
      prev.includes(value)
        ? prev.filter((r) => r !== value)
        : [...prev, value]
    )
  }

  const requestOptions = [
    'SBB passes',
    'Jungfraujoch tickets',
    'Titlis tickets',
    'Region suggestions',
    'Other planning support',
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Special Requests */}
      <div className="space-y-4">
        <Label className="text-base font-medium block">
          Do you need help with any of these?
        </Label>
        <div className="space-y-2">
          {requestOptions.map((option) => {
            const isSelected = specialRequests.includes(option)
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleRequest(option)}
                className={`w-full p-3 rounded-lg border-2 transition text-left ${
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background hover:border-border/50'
                }`}
              >
                <p className="font-medium text-foreground text-sm">
                  {option}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Regions in Mind */}
      <div className="space-y-3">
        <Label htmlFor="regions" className="text-base font-medium">
          Any regions or places already in mind?
        </Label>
        <Textarea
          id="regions"
          value={regionsInMind}
          onChange={(e) => setRegionsInMind(e.target.value)}
          placeholder="Tell us about places you'd like to visit..."
          className="min-h-24 text-base"
        />
      </div>

      {/* Anything Else */}
      <div className="space-y-3">
        <Label htmlFor="anything-else" className="text-base font-medium">
          Anything else on your mind?
        </Label>
        <Textarea
          id="anything-else"
          value={anythingElse}
          onChange={(e) => setAnythingElse(e.target.value)}
          placeholder="Questions, concerns, ideas... we're all ears."
          className="min-h-24 text-base"
        />
      </div>

      {/* Navigation */}
      <div className="flex gap-3 pt-8 border-t border-border">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          type="submit"
          size="lg"
          className="ml-auto"
        >
          Next
        </Button>
      </div>
    </form>
  )
}
