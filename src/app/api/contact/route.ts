import { Resend } from 'resend';

export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;
const contactRecipient = process.env.CONTACT_TO_EMAIL ?? 'hello@unepal.com';
const contactSender = process.env.CONTACT_FROM_EMAIL ?? 'uNepal Contact <onboarding@resend.dev>';

const resend = resendApiKey ? new Resend(resendApiKey) : null;

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return Response.json({ message: 'Invalid request payload.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const subject = String(body.subject ?? 'General support').trim() || 'General support';
  const message = String(body.message ?? '').trim();

  if (!name || !email || !message) {
    return Response.json({ message: 'Name, email, and message are required.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ message: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (!resend) {
    return Response.json(
      {
        message: 'Contact form email is not configured yet. Please email hello@unepal.com directly for now.',
      },
      { status: 503 }
    );
  }

  const cleanSubject = subject.slice(0, 120);
  const cleanMessage = message.slice(0, 5000);

  try {
    const result = await resend.emails.send({
      from: contactSender,
      to: [contactRecipient],
      replyTo: email,
      subject: `uNepal website: ${cleanSubject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${cleanSubject}`,
        '',
        cleanMessage,
      ].join('\n'),
    });

    if (result.error) throw new Error('Email provider rejected the message.');
    return Response.json({ message: 'Message sent successfully.' });
  } catch {
    return Response.json(
      {
        message: 'We could not send your message right now. Please try again or email hello@unepal.com directly.',
      },
      { status: 500 }
    );
  }
}
