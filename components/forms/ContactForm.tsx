"use client"

export default function ContactForm() {
  return (
    <form
      className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
      aria-label="Contact form"
      method="post"
      action="/api/contact"
      onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const data = new FormData(form)
        // collect checked interests
        const interests = Array.from(
          form.querySelectorAll('input[name="interests"]:checked')
        ).map((i) => (i as HTMLInputElement).value)
        const body = Object.fromEntries(data.entries()) as Record<string, unknown>
        if (interests.length) {
          body.interests = interests
        }
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        if (res.ok) {
          alert('Thanks — we’ll reply within two business days.')
          form.reset()
        } else {
          alert('Sorry, something went wrong. Please try again later.')
        }
      }}
    >
      <label className="flex flex-col gap-1">
        <span>Name</span>
        <input className="rounded-md border bg-background p-2 focus-ring" name="name" required minLength={2} aria-required="true" />
      </label>
      <label className="flex flex-col gap-1">
        <span>Email</span>
        <input className="rounded-md border bg-background p-2 focus-ring" name="email" type="email" required aria-required="true" />
      </label>
      <label className="md:col-span-2 flex flex-col gap-1">
        <span>Company</span>
        <input className="rounded-md border bg-background p-2 focus-ring" name="company" />
      </label>
      <label className="flex flex-col gap-1">
        <span>Company size</span>
        <select className="rounded-md border bg-background p-2 focus-ring" name="company_size">
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value=">200">200+</option>
        </select>
      </label>
      <fieldset className="flex flex-col gap-2">
        <legend className="font-medium">Interests</legend>
        <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="agentic" /> Agentic systems</label>
        <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="automation" /> Automation</label>
        <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="training" /> Training</label>
      </fieldset>
      <label className="md:col-span-2 flex flex-col gap-1">
        <span>Notes</span>
        <textarea className="min-h-28 rounded-md border bg-background p-2 focus-ring" name="notes" />
      </label>
      <p className="md:col-span-2 text-sm text-muted-foreground">We reply within two business days.</p>
      <div className="md:col-span-2 flex items-center gap-3">
        <button className="rounded-md border bg-card px-4 py-2 focus-ring" type="submit">Send</button>
        <a className="underline" href="https://cal.com/" target="_blank" rel="noopener noreferrer" aria-label="Open Cal.com scheduling">Prefer a call? Pick a time that suits you.</a>
      </div>
    </form>
  )
}


