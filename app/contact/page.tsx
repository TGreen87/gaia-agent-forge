export const metadata = { title: 'Contact' }
import ContactForm from '@/components/forms/ContactForm'

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <h1 className="mb-4 text-4xl font-semibold tracking-tight">Let’s find your first quick win</h1>
      <p className="lede text-muted-foreground">Tell us where it hurts. We’ll suggest two options and the smallest next step.</p>
      <ContactForm />
    </main>
  )
}


