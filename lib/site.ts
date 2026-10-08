export const site = {
  name: "numuun",
  domain: "numuun.health",
  url: "https://numuun.health",
  email: "hello@numuun.health",
  tagline: "Parenting, but make it legendary.",
  description:
    "Developmental milestones from 0 to 5, explained like a friend would — plus stories and play ideas for parents who are crushing it.",
  // Where the "Subscribe" form sends emails: the Google Apps Script web app URL
  // that writes to the subscribers Google Sheet (see scripts/subscribe-to-sheet.gs).
  // The form posts `email` and `page`. Leave empty to fall back to a mailto link.
  subscribeEndpoint: process.env.NEXT_PUBLIC_SUBSCRIBE_ENDPOINT ?? ""
};
