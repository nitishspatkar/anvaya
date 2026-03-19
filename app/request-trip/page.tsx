import { RequestTripWizard } from '@/components/sections/request-trip-wizard'

export const metadata = {
  title: 'Request a Trip | Anvaya',
  description: 'Start a conversation about your perfect Switzerland experience',
}

export default function RequestTripPage() {
  return (
    <main className="bg-background">
      <RequestTripWizard />
    </main>
  )
}
