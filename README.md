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

## Collect subscriber emails

The subscribe form posts one field, `email`, to the URL in
`lib/site.ts` → `subscribeEndpoint`. Sign up for any email tool with an embed
form (Buttondown, Formspree, Mailchimp, ConvertKit…), copy its form action URL,
and either paste it there or set the `NEXT_PUBLIC_SUBSCRIBE_ENDPOINT`
environment variable. Until then the form opens a pre-filled email to
hello@numuun.health instead.

## Edit milestones

All milestone content lives in `lib/milestones.ts`.

## Run locally

```bash
npm install
npm run dev
```
