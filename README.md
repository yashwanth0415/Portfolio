# Yashwanth Portfolio — Static TypeScript + FormSubmit

A Vite + TypeScript portfolio with browser-local CMS, dynamic images/certificates, favicon/social-share metadata, and a contact form that emails `thurpatiyashwanth@gmail.com` through FormSubmit. This package does **not** run a custom backend, use SMTP, or require a database.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Render deployment

Deploy as a **Static Site** (not a Node Web Service).

- Build command: `npm install && npm run build`
- Publish directory: `dist`

The included `render.yaml` configures these settings.

## Contact form setup (no SMTP / no custom backend)

The contact form uses FormSubmit's hosted AJAX relay and sends submissions to `thurpatiyashwanth@gmail.com`.

1. Deploy the site and submit one test message from the public contact form.
2. Check `thurpatiyashwanth@gmail.com` for FormSubmit's activation/confirmation email.
3. Confirm the activation email. After activation, new submissions should be delivered to that mailbox.
4. If it doesn't arrive, check Spam and verify the recipient address in `src/main.ts`.

FormSubmit is a third-party hosted service; it handles form delivery without you configuring SMTP credentials or running a server.

## Admin panel limitation

Open `/admin`. The content CMS remains browser-local and is not securely shared between devices. Since this project has no backend/database, messages from visitors cannot be stored in a shared inbox inside this admin panel. Form submissions are delivered to the email inbox above; the Messages section in `/admin` explains this and links to Gmail. A genuinely shared admin inbox would require a backend/database or a third-party provider with an inbox API.

The static admin login is only a convenience gate, not real security. Do not store secrets or sensitive data in the browser CMS.
