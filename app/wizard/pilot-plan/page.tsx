"use client"
import { useState, useEffect } from 'react'
import { logEvent } from '@/lib/analytics'

type PilotPlan = {
  goal: string
  scope: string
  timeline: string[]
  deliverables: string[]
  risks: string[]
  success: string[]
}

export default function PilotPlanWizard() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    company: '',
    industry: '',
    problem: '',
    team: '',
    timeline: ''
  })
  const [plan, setPlan] = useState<PilotPlan | null>(null)

  useEffect(() => {
    logEvent('view_pilot_plan')
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Generate a sample plan based on inputs
    const generatedPlan: PilotPlan = {
      goal: `Automate ${formData.problem} to reduce manual work by 70%`,
      scope: `Focus on ${formData.industry} specific workflows with ${formData.team} team`,
      timeline: [
        'Week 1: Data analysis and tool integration',
        'Week 2: Prototype development and testing',
        'Week 3: Pilot deployment and monitoring',
        'Week 4: Results analysis and handover'
      ],
      deliverables: [
        'Working prototype with your data',
        'Accuracy measurement report',
        'Guardrail configuration',
        'Handover documentation'
      ],
      risks: [
        'Data quality issues',
        'Integration complexity',
        'Team adoption resistance'
      ],
      success: [
        '90% time reduction in target process',
        '95% accuracy maintained',
        'Team confidence in automation'
      ]
    }
    
    setPlan(generatedPlan)
    setStep(3)
    logEvent('demo_run', { variant: 'pilot_plan' })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Pilot Plan Wizard</h1>
        <p className="lede text-muted-foreground">Generate a two week plan for your first AI project.</p>
      </header>

      {step === 1 && (
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Company size</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full rounded-md border bg-background p-3"
              placeholder="e.g., 50 person SaaS company"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Industry</label>
            <input
              type="text"
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full rounded-md border bg-background p-3"
              placeholder="e.g., Healthcare, Finance, E-commerce"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Main problem to solve</label>
            <textarea
              value={formData.problem}
              onChange={(e) => handleInputChange('problem', e.target.value)}
              className="w-full rounded-md border bg-background p-3"
              rows={3}
              placeholder="Describe the manual process you want to automate..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Team involved</label>
            <input
              type="text"
              value={formData.team}
              onChange={(e) => handleInputChange('team', e.target.value)}
              className="w-full rounded-md border bg-background p-3"
              placeholder="e.g., Operations team, 5 people"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Timeline preference</label>
            <select
              value={formData.timeline}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              className="w-full rounded-md border bg-background p-3"
              required
            >
              <option value="">Select timeline</option>
              <option value="2-weeks">2 weeks (recommended)</option>
              <option value="4-weeks">4 weeks</option>
              <option value="6-weeks">6 weeks</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
          >
            Generate Plan
          </button>
        </form>
      )}

      {step === 3 && plan && (
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-md border bg-card p-6">
            <h2 className="mb-4 text-2xl font-semibold">Your Two Week Pilot Plan</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="mb-2 text-lg font-medium">Goal</h3>
                <p className="text-muted-foreground">{plan.goal}</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-medium">Scope</h3>
                <p className="text-muted-foreground">{plan.scope}</p>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-medium">Timeline</h3>
                <ul className="space-y-2">
                  {plan.timeline.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-medium">Deliverables</h3>
                <ul className="space-y-2">
                  {plan.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-medium">Success Metrics</h3>
                <ul className="space-y-2">
                  {plan.success.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="mb-2 text-lg font-medium">Risks & Mitigation</h3>
                <ul className="space-y-2">
                  {plan.risks.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://cal.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
              onClick={() => logEvent('discovery_booked', { source: 'pilot_plan' })}
            >
              Book Discovery Call
            </a>
          </div>
        </div>
      )}
    </main>
  )
}
