'use client'

import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Step1About from '@/components/steps/step1-about'
import Step2Transport from '@/components/steps/step2-transport'
import Step3Stay from '@/components/steps/step3-stay'
import Step4Experiences from '@/components/steps/step4-experiences'
import Step5Meals from '@/components/steps/step5-meals'
import Step6Requests from '@/components/steps/step6-requests'
import Step7Review from '@/components/steps/step7-review'
import ConfirmationScreen from '@/components/steps/confirmation'

export interface FormData {
  fullName: string
  city: string
  groupSize: string
  season: string
  year: string
  duration: string
  source: string
  transport: string
  airportPickup: boolean
  stay: string
  experiences: string[]
  meals: string[]
  dietaryNeeds: string[]
  specialRequests: string[]
  regionsInMind: string
  anythingElse: string
  email: string
  whatsapp: string
  consent: boolean
}

export function RequestTripWizard() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    city: '',
    groupSize: '',
    season: '',
    year: new Date().getFullYear().toString(),
    duration: '',
    source: '',
    transport: '',
    airportPickup: false,
    stay: '',
    experiences: [],
    meals: [],
    dietaryNeeds: [],
    specialRequests: [],
    regionsInMind: '',
    anythingElse: '',
    email: '',
    whatsapp: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleNext = (newData: Partial<FormData>) => {
    setFormData({ ...formData, ...newData })
    if (step < 7) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (finalData: Partial<FormData>) => {
    setFormData({ ...formData, ...finalData })
    setSubmitted(true)
  }

  if (submitted) {
    return <ConfirmationScreen />
  }

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen pt-20 pb-16">
        <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-serif text-2xl md:text-3xl text-foreground">
                {step === 1 && 'About You'}
                {step === 2 && 'Getting Around'}
                {step === 3 && 'Your Stay'}
                {step === 4 && 'Experiences'}
                {step === 5 && 'Meals'}
                {step === 6 && 'Special Requests'}
                {step === 7 && 'Review & Submit'}
              </h1>
              <span className="text-sm text-muted-foreground">
                Step {step} of 7
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(step / 7) * 100}%` }}
              />
            </div>
          </div>

          {/* Reassurance text (show on step 1) */}
          {step === 1 && (
            <div className="mb-8 p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground">
                This is not a booking. It's the start of a conversation. We'll get back to you.
              </p>
            </div>
          )}

          {/* Step Components */}
          {step === 1 && (
            <Step1About
              data={formData}
              onNext={handleNext}
            />
          )}
          {step === 2 && (
            <Step2Transport
              data={formData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 3 && (
            <Step3Stay
              data={formData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 4 && (
            <Step4Experiences
              data={formData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 5 && (
            <Step5Meals
              data={formData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 6 && (
            <Step6Requests
              data={formData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 7 && (
            <Step7Review
              data={formData}
              onSubmit={handleSubmit}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
