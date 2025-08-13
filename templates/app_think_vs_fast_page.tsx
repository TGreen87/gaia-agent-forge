"use client";
import { useState } from "react";
import { track } from "@/lib/analytics";

export default function ThinkVsFast() {
  const [prompt, setPrompt] = useState(""); 
  const [status, setStatus] = useState<"idle"|"running"|"done">("idle");
  const [out, setOut] = useState<{fast?: string, think?: string}>({});

  async function run() {
    setStatus("running");
    // Placeholder: wire your API routes here.
    // setOut({ fast: "Fast path result...", think: "Think path result..." });
    setTimeout(() => {
      setOut({ fast: "Fast path result with sources: [link]", think: "Think path result with sources: [link]" });
      setStatus("done");
      track("demo_run", { variant: "think_vs_fast" });
    }, 800);
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Think vs Fast</h1>
      <p className="mt-2 text-muted-foreground">Run the same task in two modes. See timing and sources.</p>

      <div className="mt-6 grid gap-4">
        <textarea value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Enter a prompt you care about" className="w-full min-h-[120px] rounded-md border bg-background p-3" />
        <button disabled={status==="running"} onClick={run} className="btn btn-primary w-fit">Run</button>
      </div>

      {status !== "idle" && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="rounded-md border p-4">
            <h2 className="text-lg font-medium">Fast</h2>
            <pre className="mt-2 whitespace-pre-wrap text-sm">{out.fast || "..."}</pre>
          </section>
          <section className="rounded-md border p-4">
            <h2 className="text-lg font-medium">Think</h2>
            <pre className="mt-2 whitespace-pre-wrap text-sm">{out.think || "..."}</pre>
          </section>
        </div>
      )}
    </main>
  );
}
