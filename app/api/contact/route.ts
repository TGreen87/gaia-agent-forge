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

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: integrate with your CRM/email/webhook. For now, log.
    console.log('[contact] submission', { name, email, company, interests, notes })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] error', error)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}


