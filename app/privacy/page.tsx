export const metadata = { title: 'Privacy' }

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[800px] px-4 py-16 md:px-6">
      <h1 className="mb-6 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="measure text-muted-foreground">Last updated: {new Date().toISOString().slice(0, 10)}</p>
      <section className="prose prose-slate dark:prose-invert mt-8">
        <h2>What we collect</h2>
        <ul>
          <li>Contact forms: your name, email, and any information you include in your message.</li>
          <li>Analytics: Plausible Analytics (privacy-friendly, cookie-free) with aggregated, anonymous metrics.</li>
        </ul>
        <h2>How we use it</h2>
        <ul>
          <li>To respond to your requests and provide services.</li>
          <li>To understand usage and improve the site. No personal profiles or ads.</li>
        </ul>
        <h2>What we don’t do</h2>
        <ul>
          <li>We do not sell your personal data.</li>
          <li>We do not share personal data with third parties except as needed to provide the service you asked for.</li>
        </ul>
        <h2>EU/EEA visitors</h2>
        <p>Plausible is GDPR-compliant and does not use cookies. If we add services that require consent, we’ll provide a clear consent banner.</p>
        <h2>Security</h2>
        <p>We use reasonable safeguards to protect information. No system is perfectly secure.</p>
        <h2>Contact</h2>
        <p>Email: privacy@greenaiautomation.ai</p>
      </section>
    </main>
  )
}


