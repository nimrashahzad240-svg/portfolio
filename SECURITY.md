# Security notes

Reviewed 3 November 2026. This is a static portfolio using a third-party contact delivery service. No website can be guaranteed unhackable. This is a scoped source/build review, not a penetration test.

## Contact and credentials

- The primary contact form posts over HTTPS to the fixed FormSubmit endpoint for **nimra.shahzad240@gmail.com**. No visitor input chooses the destination, CC, BCC, webhook, redirect or email header subject. The enquiry subject is ordinary form data; the delivery subject is fixed.
- Keep FormSubmit's default hosted CAPTCHA enabled. The form also includes the documented honeypot. These reduce spam; browser validation and a honeypot alone are not server-side security controls.
- Name, email, subject and message have browser-side length and required-field constraints; the email input uses native email validation. These are usability checks, not proof of identity. FormSubmit owns server-side submission processing, validation and abuse handling.
- FormSubmit requires recipient activation through the inbox. Activation and final inbox receipt cannot be verified from source code. Before launch, follow START_HERE.md and confirm a test email arrives.
- Visitors see a disclosure before sending. Their message and reply address are processed by FormSubmit. The provider documents a 30-day submission archive. This is an external privacy and availability dependency; do not use this form for sensitive data.
- A supplied reply address is not verified. To use a signed-in sending account instead, visitors can use the email-app fallback.
- There is no site login, password database, file-upload form, custom email server, server secret or stored-message database in this repository. No Gmail password is needed. Do not add secrets to frontend code or public assets.
- React renders input as text/values, never HTML. The fallback mailto fixes its recipient and encodes each field separately; name/subject control characters are removed and lengths bounded.
- No automatic reply is configured, avoiding a public auto-reply email mechanism.

## Production browser policy

The build hashes each compiled application script, adds script integrity attributes and installs a matching Content Security Policy. Inline JavaScript, inline event-handler attributes, dynamic evaluation, object embeds, base-URL overrides and application fetch/WebSocket connections are blocked. The only allowed form destination is the fixed FormSubmit recipient endpoint. The provider's subsequent spam-check/confirmation pages are separate documents with their own policies; no provider scripts run inside the portfolio.

The policy permits existing Google Fonts, YouTube's privacy-enhanced player, local media and CSS data-image textures. Existing dynamic React styles require inline CSS. The policy applies to the **production build**, not Vite's development server. Meta policies cannot enforce all HTTP-only headers or frame-ancestors; GitHub Pages does not give this package arbitrary response-header control.

## Build and deployment

- Dependencies are pinned with a lockfile. Run `npm ci`, `npm run check`, `npm audit` and `npm run build` before publishing.
- The GitHub workflow uses commit-pinned official actions, read-only build permissions, no persisted checkout credentials, and a separate deployment job with Pages/OIDC permissions. It rejects known high/critical dependency advisories. Dependabot proposes weekly npm and Actions updates.
- The exported dev/preview commands bind locally. Publish `dist`, never the development server.
- The export excludes Git history, platform hosting metadata, dependency directories, build output, environment files and private-key files. A source-pattern scan helps catch common embedded credentials; it cannot prove absence of every possible secret.
- Enable HTTPS on the host and two-factor authentication on the repository account. Review dependency updates and maintain backups.

## Verification and remaining limits

On 3 November 2026, the locked dependency audit reported zero known vulnerabilities, the source/contact checks passed, and the production build succeeded. Browser checks verified the recipient and POST destination, invalid-email rejection, plain-text handling of HTML-like input, and the active production CSP. A test submission reached FormSubmit, which displayed its activation-required confirmation and stated that it sent the recipient an activation email. Inbox activation and receipt of a subsequent enquiry remain unverified.

The source/contact checks exercise recipient isolation, URI/header injection attempts, Unicode and length boundaries. Dependency advisory checks and production builds are point-in-time checks; passing them is not proof against unknown vulnerabilities.

Final email delivery also depends on recipient activation, FormSubmit availability, spam filters and mailbox acceptance. No code can guarantee delivery to an inbox. Visitors can use the direct-email fallback if the service is unavailable.

Publicly displayed images and videos can be copied. Hiding download controls or blocking context menus is a deterrent, not access control. Publish only media you are comfortable displaying.

References: [FormSubmit documentation](https://formsubmit.co/documentation), [activation help](https://formsubmit.co/help), [MDN CSP guide](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/CSP), [GitHub Pages HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).
