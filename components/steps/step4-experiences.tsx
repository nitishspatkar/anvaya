'use client'

import React, { useState } from 'react'
import { FormData } from '@/components/sections/request-trip-wizard'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Mountain,
  Wine,
  MapPin,
  Utensils,
} from 'lucide-react'

interface Step4Props {
  data: FormData
  onNext: (data: Partial<FormData>) => void
  onBack: () => void
}

export default function Step4Experiences({ data, onNext, onBack }: Step4Props) {
  const [experiences, setExperiences] = useState<string[]>(data.experiences)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ experiences })
  }

  const toggleExperience = (value: string) => {
    setExperiences((prev) =>
      prev.includes(value)
        ? prev.filter((e) => e !== value)
        : [...prev, value]
    )
  }

  const experienceOptions = [
    {
      value: 'Alpine trails & mountain walks',
      label: 'Alpine trails & mountain walks',
      description:
        'Switzerland has breathtaking hikes from gentle forest walks to high-altitude trails. We know the routes that are beautiful, seasonal, and less crowded.',
      icon: Mountain,
    },
    {
      value: 'Cheese-making with alpine producers',
      label: 'Cheese-making with alpine producers',
      description:
        'Visit small alpine dairy farms and meet cheesemakers keeping generational traditions alive.',
      icon: Utensils,
    },
    {
      value: 'Wine terraces & winery experiences',
      label: 'Wine terraces & winery experiences',
      description:
        'Explore vineyard terraces near Lake Geneva and the Rhone Valley with tasting experiences from local producers.',
      icon: Wine,
    },
    {
      value: 'Swiss fondue, raclette & mountain traditions',
      label: 'Swiss fondue, raclette & mountain traditions',
      description:
        'Enjoy warm, intimate Swiss food traditions in the right setting, with stories and local context.',
      icon: Utensils,
    },
    {
      value: 'The Bern and many other pretty towns only locals know',
      label: 'The Bern and many other pretty towns only locals know',
      description:
        'Beyond postcard spots: hidden neighborhoods, riverside corners, weekend markets, and beautiful small towns locals actually visit.',
      icon: MapPin,
    },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <Label className="text-base font-medium block">
          What experiences interest you? (Select as many as you'd like)
        </Label>
        <div className="space-y-3">
          {experienceOptions.map((option) => {
            const Icon = option.icon
            const isSelected = experiences.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleExperience(option.value)}
                className={`w-full p-4 rounded-lg border-2 transition text-left ${
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background hover:border-border/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Icon className={`size-5 mt-1 flex-shrink-0 ${
                  isSelected ? 'text-primary' : 'text-secondary'
                }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {option.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
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
