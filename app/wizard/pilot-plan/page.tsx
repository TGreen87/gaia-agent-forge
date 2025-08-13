"use client";
import { useState } from "react";
import { track } from "@/lib/analytics";

type Plan = { goal: string; guardrails: string[]; steps: string[]; metrics: string[]; risks: string[] };

export default function PilotPlanWizard() {
  const [tooling, setTooling] = useState<string[]>([]);
  const [process, setProcess] = useState(""); // short description
  const [goal, setGoal] = useState("");      // definition of done
  const [plan, setPlan] = useState<Plan | null>(null);

  function toggle(tool: string) {
    setTooling((prev) => prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]);
  }

  function buildPlan(): Plan {
    const g = goal || "Reduce time and errors for a small repeating task";
    const guards = [
      "No exposure of sensitive data in logs",
      "Human sign off on any external message",
      "Use least privilege for all connectors"
    ];
    const steps = [
      "Prototype with a small test set using your tools",
      "Add a simple evaluation for accuracy and time saved",
      "Pilot with a small group for one week",
      "Decide to scale or stop based on the numbers"
    ];
    const metrics = [
      "Accuracy vs a labeled set",
      "Time saved per task",
      "Error rate before and after"
    ];
    const risks = [
      "Hallucination if retrieval is weak. Mitigate with citations and checks.",
      "Over automation. Keep a stop rule and a rollback plan."
    ];
    return { goal: g, guardrails: guards, steps, metrics, risks };
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const p = buildPlan();
    setPlan(p);
    track('demo_run', { variant: 'pilot_plan' });
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Pilot Plan Wizard</h1>
      <p className="mt-2 text-muted-foreground">Describe a small process. We will outline a safe two week plan.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block">
          <span className="text-sm">Your process. One sentence.</span>
          <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={process} onChange={(e)=>setProcess(e.target.value)} placeholder="Draft proposals from past work"/>
        </label>

        <label className="block">
          <span className="text-sm">Definition of done</span>
          <input className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={goal} onChange={(e)=>setGoal(e.target.value)} placeholder="A draft with sources in under 15 minutes"/>
        </label>

        <fieldset className="mt-2">
          <legend className="text-sm">Your tools</legend>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            {['Google Drive','Gmail','Notion','Slack','Trello','HubSpot','Pipedrive','Xero','MYOB'].map(t => (
              <label key={t} className="flex items-center gap-2">
                <input type="checkbox" checked={tooling.includes(t)} onChange={()=>toggle(t)} />
                <span>{t}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit" className="btn btn-primary">Build the plan</button>
      </form>

      {plan && (
        <section className="mt-10 rounded-md border p-6">
          <h2 className="text-xl font-medium">Your two week plan</h2>
          <p className="mt-2">Goal: {plan.goal}</p>

          <h3 className="mt-4 font-medium">Guardrails</h3>
          <ul className="list-disc pl-5 text-sm mt-2">
            {plan.guardrails.map(x => <li key={x}>{x}</li>)}
          </ul>

          <h3 className="mt-4 font-medium">Steps</h3>
          <ol className="list-decimal pl-5 text-sm mt-2">
            {plan.steps.map(x => <li key={x}>{x}</li>)}
          </ol>

          <h3 className="mt-4 font-medium">Metrics</h3>
          <ul className="list-disc pl-5 text-sm mt-2">
            {plan.metrics.map(x => <li key={x}>{x}</li>)}
          </ul>

          <h3 className="mt-4 font-medium">Risks</h3>
          <ul className="list-disc pl-5 text-sm mt-2">
            {plan.risks.map(x => <li key={x}>{x}</li>)}
          </ul>
        </section>
      )}
    </main>
  );
}
