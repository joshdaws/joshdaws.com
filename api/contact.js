export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, type, message } = req.body;

  if (!name || !email || !type || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error('Missing env vars:', { hasKey: !!apiKey, hasEmail: !!contactEmail });
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  try {
    const payload = {
      from: 'JoshDaws.com <carson@homeschoolhappy.com>',
      to: contactEmail,
      subject: `[${type}] ${name}`,
      reply_to: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Type: ${type}`,
        '',
        message,
      ].join('\n'),
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const body = await response.text();

    if (!response.ok) {
      console.error('Resend error:', response.status, body);
      return res.status(500).json({ error: 'Failed to send', detail: body });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err.message);
    return res.status(500).json({ error: 'Server error', detail: err.message });
  }
}
