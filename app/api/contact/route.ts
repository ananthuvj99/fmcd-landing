import sgMail from "@sendgrid/mail";

const API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL;

if (API_KEY) sgMail.setApiKey(API_KEY);

type ContactPayload = {
  name?: string;
  shop?: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  message?: string;
  website?: string;
};

const REQUIRED_FIELDS = [
  "name",
  "shop",
  "email",
  "phone",
  "city",
  "state",
  "zipcode",
  "message",
] as const;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request: Request) {
  if (!API_KEY || !FROM_EMAIL || !TO_EMAIL) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (body.website && body.website.trim().length > 0) {
    return Response.json({ ok: true });
  }

  const missing = REQUIRED_FIELDS.filter(
    (key) => !body[key] || body[key]!.trim().length === 0
  );
  if (missing.length > 0) {
    return Response.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const name = body.name!.trim();
  const shop = body.shop!.trim();
  const email = body.email!.trim();
  const phone = body.phone!.trim();
  const city = body.city!.trim();
  const state = body.state!.trim();
  const zipcode = body.zipcode!.trim();
  const message = body.message!.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Shop", shop],
    ["Email", email],
    ["Phone", phone],
    ["City", city],
    ["State", state],
    ["Zipcode", zipcode],
  ];

  const text = [
    "New contact form lead",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
    "",
    `Reply directly to this email to respond to ${name}.`,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;max-width:560px;margin:0 auto;padding:24px;">
      <div style="border-bottom:3px solid #00594F;padding-bottom:16px;margin-bottom:24px;">
        <div style="font-size:12px;font-weight:600;color:#00594F;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:6px;">
          New lead
        </div>
        <h1 style="margin:0;font-size:22px;color:#0f172a;">${escapeHtml(
          name
        )} from ${escapeHtml(shop)}</h1>
      </div>
      <p style="font-size:14px;line-height:1.6;color:#475569;margin:0 0 20px;">
        A new contact form submission just came in. Details below — hit reply on this email
        to respond directly to the customer.
      </p>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
        <table style="border-collapse:collapse;font-size:14px;width:100%;">
          ${rows
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding:6px 12px 6px 0;color:#64748b;width:90px;vertical-align:top;">${label}</td>
              <td style="padding:6px 0;color:#0f172a;">${escapeHtml(value)}</td>
            </tr>`
            )
            .join("")}
        </table>
        <div style="margin-top:14px;padding-top:14px;border-top:1px solid #e2e8f0;">
          <div style="color:#64748b;font-size:13px;margin-bottom:6px;">Message</div>
          <p style="margin:0;white-space:pre-wrap;line-height:1.5;font-size:14px;">${escapeHtml(
            message
          )}</p>
        </div>
      </div>
      <div style="background:#00594F0d;border-left:3px solid #00594F;padding:12px 16px;border-radius:6px;">
        <p style="margin:0;font-size:13px;line-height:1.5;color:#0f172a;">
          <strong>Tip:</strong> Replying to this email goes straight to
          <a href="mailto:${escapeHtml(
            email
          )}" style="color:#00594F;text-decoration:none;">${escapeHtml(email)}</a>.
        </p>
      </div>
      <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center;">
        Sent from the FixMyCarDude landing page contact form.
      </div>
    </div>
  `;

  const autoReplyText = [
    `Hi ${name},`,
    "",
    "Thanks for reaching out to FixMyCarDude! We've received your message and a real human from our team will get back to you within 24 hours — no chatbots, we promise.",
    "",
    "Here's a quick recap of what you sent us:",
    "",
    `  Shop: ${shop}`,
    `  Location: ${city}, ${state} ${zipcode}`,
    `  Phone: ${phone}`,
    "",
    "Your message:",
    message,
    "",
    "If anything is urgent in the meantime, just reply to this email and it'll land straight in our inbox.",
    "",
    "Talk soon,",
    "The FixMyCarDude Team",
  ].join("\n");

  const autoReplyHtml = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;max-width:560px;margin:0 auto;padding:24px;">
      <div style="border-bottom:3px solid #00594F;padding-bottom:16px;margin-bottom:24px;">
        <h1 style="margin:0;font-size:22px;color:#00594F;">Thanks for reaching out, ${escapeHtml(
          name
        )}!</h1>
      </div>
      <p style="font-size:15px;line-height:1.6;margin:0 0 16px;">
        We've received your message and a real human from our team will get back to you
        <strong>within 24 hours</strong> — no chatbots, we promise.
      </p>
      <p style="font-size:15px;line-height:1.6;margin:0 0 24px;">
        In the meantime, here's a quick recap of what you sent us so you know we got every detail:
      </p>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
        <table style="border-collapse:collapse;font-size:14px;width:100%;">
          <tr>
            <td style="padding:4px 12px 4px 0;color:#64748b;width:90px;">Shop</td>
            <td style="padding:4px 0;">${escapeHtml(shop)}</td>
          </tr>
          <tr>
            <td style="padding:4px 12px 4px 0;color:#64748b;">Location</td>
            <td style="padding:4px 0;">${escapeHtml(city)}, ${escapeHtml(
              state
            )} ${escapeHtml(zipcode)}</td>
          </tr>
          <tr>
            <td style="padding:4px 12px 4px 0;color:#64748b;">Phone</td>
            <td style="padding:4px 0;">${escapeHtml(phone)}</td>
          </tr>
        </table>
        <div style="margin-top:14px;padding-top:14px;border-top:1px solid #e2e8f0;">
          <div style="color:#64748b;font-size:13px;margin-bottom:6px;">Your message</div>
          <p style="margin:0;white-space:pre-wrap;line-height:1.5;font-size:14px;">${escapeHtml(
            message
          )}</p>
        </div>
      </div>
      <p style="font-size:14px;line-height:1.6;color:#475569;margin:0 0 8px;">
        If anything is urgent, just hit reply on this email and it'll land straight in our inbox.
      </p>
      <p style="font-size:15px;line-height:1.6;margin:24px 0 0;">
        Talk soon,<br/>
        <strong style="color:#00594F;">The FixMyCarDude Team</strong>
      </p>
      <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center;">
        This is an automated confirmation. A team member will follow up personally soon.
      </div>
    </div>
  `;

  const notification = sgMail.send({
    to: TO_EMAIL,
    from: FROM_EMAIL,
    replyTo: { email, name },
    subject: `New contact form lead — ${shop}`,
    text,
    html,
  });

  const autoReply = sgMail.send({
    to: { email, name },
    from: { email: FROM_EMAIL, name: "FixMyCarDude" },
    replyTo: TO_EMAIL,
    subject: "Thanks for reaching out — we'll be in touch soon",
    text: autoReplyText,
    html: autoReplyHtml,
  });

  const [notificationResult, autoReplyResult] = await Promise.allSettled([
    notification,
    autoReply,
  ]);

  if (notificationResult.status === "rejected") {
    console.error("SendGrid notification error:", notificationResult.reason);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }

  if (autoReplyResult.status === "rejected") {
    console.error("SendGrid auto-reply error:", autoReplyResult.reason);
  }

  return Response.json({ ok: true });
}
