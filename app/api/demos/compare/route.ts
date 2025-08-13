import { NextResponse } from 'next/server'

type CompareRequest = {
  prompt: string
  files?: string[]
}

type CompareResult = {
  model: 'gpt-5' | 'gpt-5-thinking'
  durationMs: number
  answer: string
  citations?: string[]
  confidence: 'low' | 'medium' | 'high'
  error?: string
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const id = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms)
    promise
      .then((value) => {
        clearTimeout(id)
        resolve(value)
      })
      .catch((err) => {
        clearTimeout(id)
        reject(err)
      })
  })
}

async function callModelStub(model: 'gpt-5' | 'gpt-5-thinking', prompt: string): Promise<{ answer: string; citations?: string[]; simulatedMs: number; confidence: 'low' | 'medium' | 'high' }> {
  // Simulate different latencies
  const simulatedMs = model === 'gpt-5' ? 1800 : 5200
  await new Promise((r) => setTimeout(r, simulatedMs))
  return {
    answer: model === 'gpt-5'
      ? `Fast answer for: ${prompt.slice(0, 140)}...`
      : `Thinking answer with brief reasoning for: ${prompt.slice(0, 140)}...` 
        + `\n\nReasoning: Planned steps -> Retrieved 2 snippets -> Cross-checked -> Finalized.`,
    citations: ['Placeholder Source A', 'Placeholder Source B'],
    simulatedMs,
    confidence: model === 'gpt-5' ? 'medium' : 'high',
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CompareRequest
    const prompt = (body?.prompt || '').trim()
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    const overallTimeoutMs = 15000

    const startFast = Date.now()
    const fastPromise = withTimeout(
      callModelStub('gpt-5', prompt),
      overallTimeoutMs,
      'gpt-5'
    ).then((r): CompareResult => ({
      model: 'gpt-5',
      durationMs: Date.now() - startFast,
      answer: r.answer,
      citations: r.citations,
      confidence: r.confidence,
    })).catch((err): CompareResult => ({
      model: 'gpt-5',
      durationMs: Date.now() - startFast,
      answer: '',
      confidence: 'low',
      error: err?.message || 'Fast model failed',
    }))

    const startThinking = Date.now()
    const thinkingPromise = withTimeout(
      callModelStub('gpt-5-thinking', prompt),
      overallTimeoutMs,
      'gpt-5-thinking'
    ).then((r): CompareResult => ({
      model: 'gpt-5-thinking',
      durationMs: Date.now() - startThinking,
      answer: r.answer,
      citations: r.citations,
      confidence: r.confidence,
    })).catch((err): CompareResult => ({
      model: 'gpt-5-thinking',
      durationMs: Date.now() - startThinking,
      answer: '',
      confidence: 'low',
      error: err?.message || 'Thinking model failed',
    }))

    const [fast, thinking] = await Promise.all([fastPromise, thinkingPromise])

    return NextResponse.json({ fast, thinking })
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong. Please try again later.' }, { status: 500 })
  }
}


