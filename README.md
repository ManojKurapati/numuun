# numuun.health

Developmental milestones (0–5 years), a blog, and an email list for parents.
Built with Next.js and exported as a static site to GitHub Pages — every push
to `main` redeploys numuun.health.

## Write a blog post

1. Copy `content/blog/_TEMPLATE.md` to `content/blog/your-post-name.md`.
   The file name becomes the URL: `numuun.health/blog/your-post-name`.
2. Fill in the title, date, excerpt, tag and emoji at the top, then write in Markdown.
3. Commit and push to `main` (you can do this right from GitHub's "Add file" button).

Posts with a future `date` stay hidden until a build runs on or after that day.

## Collect subscriber emails (Google Sheet)

Subscribers land in the Google Sheet via a small Apps Script web app.

1. Open the sheet → **Extensions → Apps Script**.
2. Replace the editor contents with `scripts/subscribe-to-sheet.gs` and save.
3. **Deploy → New deployment** → type **Web app**. Execute as **Me**,
   who has access **Anyone**. Authorize when asked.
4. Copy the web app URL (ends in `/exec`) into `subscribeEndpoint` in
   `lib/site.ts`, commit and push.

Each signup adds a row: timestamp, email, and the page they signed up from.
Duplicate emails are skipped. If you edit the script later, use
**Deploy → Manage deployments → Edit → New version** so the URL stays the same.

Until the URL is set, the form opens a pre-filled email to hello@numuun.health.

## Edit milestones

All milestone content lives in `lib/milestones.ts`.

## Run locally

```bash
npm install
npm run dev
```
