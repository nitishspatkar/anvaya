'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export default function InitialInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    days: '',
    transport: '',
    accommodation: '',
    experiences: [] as string[],
    meals: '',
    additionalInfo: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const experienceOptions = [
    { 
      id: 'hiking', 
      label: 'Alpine trails & mountain walks',
      description: 'Switzerland has countless breathtaking hikes—from gentle forest walks to high-altitude trails. We know the ones that take your breath away, the lesser-known valleys, and routes that change with the seasons.'
    },
    { 
      id: 'cheese-making', 
      label: 'Cheese-making with alpine producers',
      description: 'There are over 450 varieties of Swiss cheese. We can take you to small alpine dairy farms where master cheesemakers work the same way their families have for generations.'
    },
    { 
      id: 'wine-making', 
      label: 'Wine terraces & winery experiences',
      description: 'Hidden along Lake Geneva and the Rhone Valley are some of Europe\'s most stunning terraced vineyards. Visit where local vintners work, taste wines most tourists never discover.'
    },
    { 
      id: 'fondue-raclette', 
      label: 'Swiss fondue, raclette & mountain traditions',
      description: 'More than just food—these meals are rituals. We cook them at home, the way it\'s meant to be: intimate, warm, and shared around a table with stories.'
    },
    { 
      id: 'indian-meals', 
      label: 'Home-cooked Indian meals & spices',
      description: 'We prepare Indian food using ingredients we source carefully in Switzerland and bring in from home. It\'s comfort, familiarity, and nostalgia on a plate.'
    },
    { 
      id: 'hidden-gems', 
      label: 'The Bern only locals know',
      description: 'Beyond the old town postcards. The bookshops, artisanal cafes, riverside spots, Sunday markets, and neighborhoods where real life happens—where our friends actually go.'
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', days: '', transport: '', accommodation: '', experiences: [], meals: '', additionalInfo: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="space-y-8">
          {/* Section Title */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Tell us what you're looking for
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Share your initial needs and preferences. This isn't a booking—it's the start of a conversation where we get to know what matters to you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tell us your name"
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="days" className="block text-sm font-medium text-foreground mb-2">
                How many days are you thinking?
              </label>
              <Input
                id="days"
                name="days"
                type="text"
                value={formData.days}
                onChange={handleChange}
                placeholder="e.g., 3-5 days, a week, etc."
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="transport" className="block text-sm font-medium text-foreground mb-2">
                Getting around—do you prefer to drive or would you like us to drive?
              </label>
              <Input
                id="transport"
                name="transport"
                type="text"
                value={formData.transport}
                onChange={handleChange}
                placeholder="e.g., self-drive rental, you drive us, mix of both"
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">Include if you need airport pickup/drop-off</p>
            </div>

            <div>
              <label htmlFor="accommodation" className="block text-sm font-medium text-foreground mb-2">
                Where would you prefer to stay?
              </label>
              <Input
                id="accommodation"
                name="accommodation"
                type="text"
                value={formData.accommodation}
                onChange={handleChange}
                placeholder="e.g., at your home, separate accommodation, flexible"
                className="w-full"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-foreground mb-6">What experiences interest you?</p>
              <div className="space-y-5">
                {experienceOptions.map(option => (
                  <div key={option.id} className="flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <Checkbox
                        id={option.id}
                        checked={formData.experiences.includes(option.id)}
                        onCheckedChange={() => {
                          setFormData(prev => ({
                            ...prev,
                            experiences: prev.experiences.includes(option.id)
                              ? prev.experiences.filter(id => id !== option.id)
                              : [...prev.experiences, option.id]
                          }));
                        }}
                      />
                    </div>
                    <label htmlFor={option.id} className="flex-1 cursor-pointer hover:text-primary transition">
                      <p className="text-sm font-medium text-foreground">{option.label}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{option.description}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="meals" className="block text-sm font-medium text-foreground mb-2">
                Meals—how do you envision dining?
              </label>
              <Input
                id="meals"
                name="meals"
                type="text"
                value={formData.meals}
                onChange={handleChange}
                placeholder="e.g., at our home, restaurants, mixed, specific preferences"
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">We offer fondue, raclette, and Indian meals at home</p>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-2">
                Anything else we should know?
              </label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Dietary preferences, SBB tickets needed (e.g., Jungfrau), group size, season preference, or anything else..."
                rows={4}
                className="w-full"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition"
              >
                {submitted ? 'Message sent!' : 'Send initial inquiry'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
