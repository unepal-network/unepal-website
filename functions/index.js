const { onRequest } = require("firebase-functions/v2/https");
const { Resend } = require("resend");

const contactRecipient = process.env.CONTACT_TO_EMAIL || "hello@unepal.com";
const contactSender =
  process.env.CONTACT_FROM_EMAIL || "uNepal Contact <onboarding@resend.dev>";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

exports.contact = onRequest({ cors: true }, async (request, response) => {
  if (request.method === "OPTIONS") {
    response.status(204).send("");
    return;
  }

  if (request.method !== "POST") {
    response.status(405).json({ message: "Method not allowed." });
    return;
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    response.status(503).json({
      message:
        "Contact form email is not configured yet. Please email hello@unepal.com directly for now.",
    });
    return;
  }

  const name = String(request.body?.name || "").trim();
  const email = String(request.body?.email || "").trim();
  const subject = String(request.body?.subject || "General support").trim() || "General support";
  const message = String(request.body?.message || "").trim();

  if (!name || !email || !message) {
    response.status(400).json({ message: "Name, email, and message are required." });
    return;
  }

  if (!isValidEmail(email)) {
    response.status(400).json({ message: "Please enter a valid email address." });
    return;
  }

  const resend = new Resend(resendApiKey);
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
        "",
        cleanMessage,
      ].join("\n"),
    });

    if (result.error) throw new Error("Email provider rejected the message.");
    response.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact function failed", error);
    response.status(500).json({
      message:
        "We could not send your message right now. Please try again or email hello@unepal.com directly.",
    });
  }
});
