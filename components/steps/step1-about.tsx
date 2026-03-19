'use client'

import React, { useState } from 'react'
import { FormData } from '@/components/sections/request-trip-wizard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Step1Props {
  data: FormData
  onNext: (data: Partial<FormData>) => void
}

export default function Step1About({ data, onNext }: Step1Props) {
  const [fullName, setFullName] = useState(data.fullName)
  const [city, setCity] = useState(data.city)
  const [groupSize, setGroupSize] = useState(data.groupSize)
  const [season, setSeason] = useState(data.season)
  const [year, setYear] = useState(data.year)
  const [duration, setDuration] = useState(data.duration)
  const [source, setSource] = useState(data.source)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !city || !groupSize || !season || !year || !duration || !source) {
      return
    }
    onNext({
      fullName,
      city,
      groupSize,
      season,
      year,
      duration,
      source,
    })
  }

  const isComplete =
    fullName && city && groupSize && season && year && duration && source

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Full Name */}
      <div className="space-y-3">
        <Label htmlFor="fullName" className="text-base font-medium">
          Full Name
        </Label>
        <Input
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your name"
          className="h-10 text-base"
        />
      </div>

      {/* City & State */}
      <div className="space-y-3">
        <Label htmlFor="city" className="text-base font-medium">
          City & State in India
        </Label>
        <Input
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="e.g., Mumbai, Maharashtra"
          className="h-10 text-base"
        />
      </div>

      {/* Group Size */}
      <div className="space-y-3">
        <Label className="text-base font-medium block">
          How many people are travelling?
        </Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: '1', label: '1 person' },
            { value: '2', label: '2 people' },
            { value: '3', label: '3 people' },
            { value: '3+', label: '3+ people' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setGroupSize(option.value)}
              className={`p-3 rounded-lg border-2 transition text-center ${
                groupSize === option.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-background'
              }`}
            >
              <span className="text-sm font-medium text-foreground">
                {option.label}
              </span>
            </button>
          ))}
        </div>
        {groupSize === '3+' && (
          <p className="text-sm text-secondary mt-2">
            We typically host a maximum of 2–3 guests, so larger groups we'll discuss with you personally.
          </p>
        )}
      </div>

      {/* Travel Season */}
      <div className="space-y-3">
        <Label className="text-base font-medium block">
          When are you thinking of travelling?
        </Label>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {[
              { value: 'spring', label: 'Spring' },
              { value: 'summer', label: 'Summer' },
              { value: 'autumn', label: 'Autumn' },
              { value: 'winter', label: 'Winter' },
              { value: 'flexible', label: 'Flexible' },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSeason(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  season === option.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {season && season !== 'flexible' && (
            <div className="mt-4 space-y-2">
              <Label htmlFor="year" className="text-sm">
                Which year?
              </Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger id="year" className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[2025, 2026, 2027, 2028].map((y) => (
                    <SelectItem key={y} value={y.toString()}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>

      {/* Duration */}
      <div className="space-y-3">
        <Label className="text-base font-medium block">
          How long are you thinking?
        </Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { value: '3-4', label: '3–4 days' },
            { value: '5-7', label: '5–7 days' },
            { value: '8-10', label: '8–10 days' },
            { value: '10+', label: '10+ days' },
            { value: 'unsure', label: 'Not sure' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setDuration(option.value)}
              className={`p-3 rounded-lg border-2 transition text-center ${
                duration === option.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-background'
              }`}
            >
              <span className="text-sm font-medium text-foreground">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* How did you hear about us */}
      <div className="space-y-3">
        <Label htmlFor="source" className="text-base font-medium">
          How did you hear about us?
        </Label>
        <Select value={source} onValueChange={setSource}>
          <SelectTrigger id="source" className="h-10 text-base">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="friend">Friend recommendation</SelectItem>
            <SelectItem value="google">Google search</SelectItem>
            <SelectItem value="other-social">Other social media</SelectItem>
            <SelectItem value="travel-guide">Travel guide / article</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 pt-8 border-t border-border">
        <Button
          type="submit"
          disabled={!isComplete}
          size="lg"
          className="ml-auto"
        >
          Next
        </Button>
      </div>
    </form>
  )
}
