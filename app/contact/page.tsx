export const metadata = { title: 'Contact' }
export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <h1 className="mb-4 text-4xl font-semibold tracking-tight">Let’s find your first quick win</h1>
      <p className="lede text-muted-foreground">Tell us where it hurts. We’ll suggest two options and the smallest next step.</p>
      <form className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2" aria-label="Contact form">
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
          <label className="inline-flex items-center gap-2"><input type="checkbox" /> Agentic systems</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" /> Automation</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" /> Training</label>
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
    </main>
  )
}


