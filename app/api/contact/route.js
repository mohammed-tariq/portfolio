import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_ADDRESS = 'tariqsheik786@gmail.com';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const subject = (body.subject || 'GENERAL_INQUIRY').trim();
  const message = (body.message || '').trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'Field too long' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    // resend.dev sender works without a verified domain; swap for an address on
    // your own domain once it's verified in Resend.
    from: 'Portfolio Uplink <onboarding@resend.dev>',
    to: TO_ADDRESS,
    replyTo: email,
    subject: `[PORTFOLIO] ${subject} — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
