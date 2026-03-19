'use client'

import React, { useState } from 'react'
import { FormData } from '@/components/sections/request-trip-wizard'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Utensils,
  Mountain,
  Wine,
  Snowflake,
  Compass,
  Users,
  Eye,
  MapPin,
  Heart,
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
    { value: 'hiking-easy', label: 'Hiking Easy', icon: Mountain },
    { value: 'hiking-moderate', label: 'Hiking Moderate', icon: Mountain },
    { value: 'hiking-challenging', label: 'Hiking Challenging', icon: Mountain },
    { value: 'cheese', label: 'Cheese-Making', icon: Utensils },
    { value: 'vineyard', label: 'Vineyard Walk', icon: Wine },
    { value: 'igloo', label: 'Igloo Building', icon: Snowflake },
    { value: 'snowshoe', label: 'Snowshoeing', icon: Snowflake },
    { value: 'fondue', label: 'Fondue at Home', icon: Utensils },
    { value: 'indian-meal', label: 'Indian Home Meal', icon: Utensils },
    { value: 'bollywood', label: 'Bollywood Locations', icon: Eye },
    { value: 'jungfraujoch', label: 'Jungfraujoch', icon: Mountain },
    { value: 'titlis', label: 'Titlis', icon: Mountain },
    { value: 'bern-walk', label: 'Bern City Walk', icon: MapPin },
    { value: 'other', label: 'Other', icon: Heart },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <Label className="text-base font-medium block">
          What experiences interest you? (Select as many as you'd like)
        </Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {experienceOptions.map((option) => {
            const Icon = option.icon
            const isSelected = experiences.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleExperience(option.value)}
                className={`p-3 rounded-lg border-2 transition text-center ${
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background hover:border-border/50'
                }`}
              >
                <Icon className={`size-5 mx-auto mb-2 ${
                  isSelected ? 'text-primary' : 'text-secondary'
                }`} />
                <p className="text-xs font-medium text-foreground">
                  {option.label}
                </p>
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
