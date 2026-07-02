import { Resend } from 'resend'

type ContactPayload = {
  name?: string
  email?: string
  business?: string
  phone?: string
  services?: string[]
  budget?: string
  referralSource?: string
  message?: string
}

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const renderField = (label: string, value: string) => `
  <tr>
    <td style="padding: 10px 0; font-weight: 600; vertical-align: top; width: 180px;">${escapeHtml(label)}</td>
    <td style="padding: 10px 0; color: #7A706C;">${escapeHtml(value)}</td>
  </tr>
`

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)
  const config = useRuntimeConfig(event)

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const business = body.business?.trim() ?? ''
  const phone = body.phone?.trim() ?? 'Not provided'
  const services = Array.isArray(body.services) ? body.services.filter(Boolean) : []
  const budget = body.budget?.trim() ?? 'Not provided'
  const referralSource = body.referralSource?.trim() ?? 'Not provided'
  const message = body.message?.trim() ?? ''

  if (!name || !email || !business || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please complete all required fields.',
    })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid email address.',
    })
  }

  if (!config.resendApiKey) {
    console.warn('[contact] NUXT_RESEND_API_KEY is not configured. Skipping email send.')
    return { success: true }
  }

  const resend = new Resend(config.resendApiKey)
  const from = `B Creative Agency <${config.contactEmail}>`

  const adminHtml = `
    <div style="font-family: DM Sans, Arial, sans-serif; color: #1A1714;">
      <h1 style="font-family: Georgia, serif; font-size: 32px; margin-bottom: 24px;">New enquiry received</h1>
      <table style="width: 100%; border-collapse: collapse;">
        ${renderField('Name', name)}
        ${renderField('Email', email)}
        ${renderField('Business', business)}
        ${renderField('Phone', phone)}
        ${renderField('Services', services.length ? services.join(', ') : 'Not selected')}
        ${renderField('Budget', budget)}
        ${renderField('How they heard about B Creative', referralSource)}
        ${renderField('Message', message)}
      </table>
    </div>
  `

  const confirmationHtml = `
    <div style="font-family: DM Sans, Arial, sans-serif; color: #1A1714; line-height: 1.7;">
      <h1 style="font-family: Georgia, serif; font-size: 32px; margin-bottom: 16px;">Thanks for getting in touch, ${escapeHtml(name)}.</h1>
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thank you for reaching out to B Creative Agency. I've received your enquiry and will be in touch within 24 hours.</p>
      <p>Speak soon,</p>
      <p>Bethany</p>
    </div>
  `

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to: config.contactEmail,
        replyTo: email,
        subject: `New enquiry from ${name} — ${business}`,
        html: adminHtml,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: `Thanks for getting in touch, ${name}!`,
        html: confirmationHtml,
      }),
    ])

    return { success: true }
  }
  catch (error) {
    console.error('[contact] Failed to send enquiry emails.', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Unable to send enquiry right now.',
    })
  }
})
