"use client";
import { useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";

export default function ResourcesPage() {
  const [ok, setOk] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Optional: send to your API or Supabase
    setOk(true);
    track("playbook_downloaded", { section: "resources" });
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Resources</h1>
      <p className="mt-3 text-muted-foreground">
        Download the AI Adoption Playbook and start a safe two week pilot.
      </p>

      {!ok ? (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-lg">
          <label className="block">
            <span className="text-sm">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border bg-background px-3 py-2"
              placeholder="you@company.com"
            />
          </label>
          <button type="submit" className="btn btn-primary">Get the Playbook</button>
          <p className="text-xs text-muted-foreground">
            We only use this to send the file and a short follow up.
          </p>
        </form>
      ) : (
        <div className="mt-8 rounded-md border p-6">
          <h2 className="text-xl font-medium">Your download is ready</h2>
          <p className="mt-2">
            <Link href="/downloads/GAIA_Ai_Adoption_Playbook.html" target="_blank" className="underline">
              Open the Playbook
            </Link>
          </p>
        </div>
      )}
    </main>
  );
}
