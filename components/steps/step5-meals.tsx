'use client'

import React, { useState } from 'react'
import { FormData } from '@/components/sections/request-trip-wizard'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Wine } from 'lucide-react'

interface Step5Props {
  data: FormData
  onNext: (data: Partial<FormData>) => void
  onBack: () => void
}

export default function Step5Meals({ data, onNext, onBack }: Step5Props) {
  const [meals, setMeals] = useState<string[]>(data.meals)
  const [dietaryNeeds, setDietaryNeeds] = useState<string[]>(data.dietaryNeeds)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({
      meals,
      dietaryNeeds,
    })
  }

  const toggleMeal = (value: string) => {
    setMeals((prev) =>
      prev.includes(value)
        ? prev.filter((m) => m !== value)
        : [...prev, value]
    )
  }

  const toggleDietary = (value: string) => {
    setDietaryNeeds((prev) =>
      prev.includes(value)
        ? prev.filter((d) => d !== value)
        : [...prev, value]
    )
  }

  const mealOptions = [
    'Swiss meals at home',
    'Indian meals at home',
    'Restaurants',
    'Mix of everything',
    'Not sure',
  ]

  const dietaryOptions = [
    'Vegetarian',
    'Jain',
    'Vegan',
    'Halal',
    'No restrictions',
    'Other',
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Meal Preferences */}
      <div className="space-y-4">
        <Label className="text-base font-medium block">
          How do you feel about meals?
        </Label>
        <div className="space-y-2">
          {mealOptions.map((option) => {
            const isSelected = meals.includes(option)
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleMeal(option)}
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

      {/* Dietary Needs */}
      <div className="space-y-4">
        <Label className="text-base font-medium block">
          Any dietary restrictions or preferences?
        </Label>
        <div className="flex flex-wrap gap-2">
          {dietaryOptions.map((option) => {
            const isSelected = dietaryNeeds.includes(option)
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleDietary(option)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  isSelected
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {option}
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
