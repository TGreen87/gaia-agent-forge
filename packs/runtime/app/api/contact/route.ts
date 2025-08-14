import { NextResponse } from 'next/server';
export async function POST(req: Request){
  try{
    const { name, email, message } = await req.json();
    const payload = { name, email, message, at: new Date().toISOString() };
    const hook = process.env.N8N_WEBHOOK_URL;
    if(hook){
      await fetch(hook, { method: 'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(payload)});
    } else {
      console.log('Contact payload', payload);
    }
    return NextResponse.json({ ok:true });
  } catch(e){
    console.error('Contact error', e);
    return NextResponse.json({ ok:false }, { status:500 });
  }
}