"use client"
import { useState, useEffect } from 'react'
import { logEvent } from '@/lib/analytics'

type SearchResult = {
  answer: string
  sources: string[]
  confidence: 'low' | 'medium' | 'high'
  duration: number
}

export default function SearchWithCitations() {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [result, setResult] = useState<SearchResult | null>(null)

  useEffect(() => {
    logEvent('view_search_with_citations')
  }, [])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsSearching(true)
    setResult(null)

    // Simulate search with citations
    setTimeout(() => {
      const mockResult: SearchResult = {
        answer: `Based on the search results, ${query.toLowerCase()} involves several key components. The process typically includes data preparation, model training, and validation steps.`,
        sources: [
          'Internal Knowledge Base - AI Implementation Guide',
          'Technical Documentation - v2.1',
          'Best Practices Handbook - Chapter 3'
        ],
        confidence: 'high',
        duration: 1200
      }
      
      setResult(mockResult)
      setIsSearching(false)
      logEvent('demo_run', { variant: 'search_with_citations' })
    }, 1500)
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <header className="mb-10">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight">Search with Citations</h1>
        <p className="lede text-muted-foreground">Ask a question. Get a short answer with sources.</p>
      </header>

      <div className="mx-auto max-w-3xl">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about AI implementation, automation, or best practices..."
              className="flex-1 rounded-md border bg-background p-3"
              disabled={isSearching}
            />
            <button
              type="submit"
              disabled={isSearching || !query.trim()}
              className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {isSearching && (
          <div className="rounded-md border bg-card p-6 text-center">
            <div className="mb-2">Searching knowledge base...</div>
            <div className="text-sm text-muted-foreground">Retrieving relevant sources and generating answer</div>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="rounded-md border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Answer</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {result.duration}ms
                  </span>
                  <span className={`rounded px-2 py-1 text-xs ${
                    result.confidence === 'high' ? 'bg-green-100 text-green-800' :
                    result.confidence === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {result.confidence} confidence
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground">{result.answer}</p>
            </div>

            <div className="rounded-md border bg-card p-6">
              <h3 className="mb-3 text-lg font-medium">Sources</h3>
              <ul className="space-y-2">
                {result.sources.map((source, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                    <span className="text-sm text-muted-foreground">{source}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md border bg-card p-6">
              <h3 className="mb-3 text-lg font-medium">How it works</h3>
              <div className="grid gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>1. Query Processing</strong>
                  <p>Your question is analyzed and broken down into searchable components.</p>
                </div>
                <div>
                  <strong>2. Knowledge Retrieval</strong>
                  <p>Relevant documents and sources are retrieved from your knowledge base.</p>
                </div>
                <div>
                  <strong>3. Answer Generation</strong>
                  <p>An answer is synthesized from the retrieved sources with citations.</p>
                </div>
                <div>
                  <strong>4. Confidence Scoring</strong>
                  <p>The system evaluates answer quality and source reliability.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 rounded-md border bg-card p-6">
          <h3 className="mb-3 text-lg font-medium">Try these example queries</h3>
          <div className="grid gap-2 text-sm">
            <button
              onClick={() => setQuery('How do I implement AI automation safely?')}
              className="text-left text-muted-foreground hover:text-foreground"
            >
              How do I implement AI automation safely?
            </button>
            <button
              onClick={() => setQuery('What are the best practices for data validation?')}
              className="text-left text-muted-foreground hover:text-foreground"
            >
              What are the best practices for data validation?
            </button>
            <button
              onClick={() => setQuery('How can I measure AI system accuracy?')}
              className="text-left text-muted-foreground hover:text-foreground"
            >
              How can I measure AI system accuracy?
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
