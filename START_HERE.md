# Launch your portfolio

1. Extract the ZIP. Upload the **contents** of `nimra-portfolio` into a new GitHub repository, including `.github` and `.gitignore`.
2. In the repository open **Settings → Pages → Source → GitHub Actions**.
3. Open **Actions → Deploy portfolio → Run workflow** on your default branch. The published address appears in Settings → Pages after the green run.
4. **Activate email delivery:** open your published site’s Contact page, submit a test enquiry, and complete FormSubmit’s spam check. Open **nimra.shahzad240@gmail.com**, check Inbox and Spam, then click FormSubmit’s activation link. Send another test and confirm it arrives before sharing the portfolio with recruiters.

The contact form sends through FormSubmit to **nimra.shahzad240@gmail.com**. It needs that one-time inbox activation; it is not ready for confirmed delivery until you complete it. There are no API keys, passwords or email-service credentials to put in your repository. The visitor supplies their reply address, but the form cannot prove that they own it. The “Use my email app instead” link remains available.

FormSubmit handles delivery and anti-spam on its own page. Messages are processed by that third party, whose documentation states a 30-day submission archive. Do not collect passwords or sensitive information. See [their documentation](https://formsubmit.co/documentation) and [activation help](https://formsubmit.co/help).

Later edits pushed to the default branch publish automatically. The workflow checks the source and dependencies before publishing. In Settings → Pages, enable **Enforce HTTPS** when available. Protect your GitHub account with two-factor authentication.

To preview locally, install Node.js 22 and run `npm ci`, `npm run check`, and `npm run dev`. For the production version run `npm run build` then `npm run preview`. Deploy the generated `dist` folder; do not publish a development server.

See README.md for Git commands and customization. See SECURITY.md for the review scope and limitations.
