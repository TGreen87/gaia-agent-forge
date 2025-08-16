import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let payload: Record<string, unknown> = {}
    if (contentType.includes('application/json')) {
      payload = await request.json()
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData()
      payload = Object.fromEntries(formData.entries())
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData()
      payload = Object.fromEntries(formData.entries())
    }

    const name = String(payload.name || '').trim()
    const email = String(payload.email || '').trim()
    const company = String(payload.company || '').trim()
    const notes = String(payload.notes || '').trim()
    const interests = payload.interests
    const kind = String(payload.kind || '').trim()

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL
    const payloadOut = { name, email, company, interests, notes, kind }

    if (!webhookUrl) {
      console.log('[contact] submission (no webhook configured)', payloadOut)
      return NextResponse.json({ ok: true })
    }

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payloadOut)
      })
      if (!res.ok) {
        console.error('[contact] webhook failed', res.status)
      }
    } catch (err) {
      console.error('[contact] webhook error', err)
    }

    console.log('[contact] submission', payloadOut)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] error', error)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}


