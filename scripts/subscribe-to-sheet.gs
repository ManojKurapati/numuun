/**
 * numuun.health → Google Sheet subscriber collector.
 *
 * Paste this into the sheet's Apps Script editor (Extensions → Apps Script),
 * then Deploy → New deployment → Web app, "Execute as: Me",
 * "Who has access: Anyone". Copy the /exec URL into lib/site.ts.
 */
const SHEET_ID = "1adl9CsfOJr-nDrGtBI5W1rUmJVZT0GewhcCkiijwKso";
const HEADERS = ["Timestamp", "Email", "Page"];

function doPost(e) {
  const email = String((e && e.parameter && e.parameter.email) || "").trim().toLowerCase();
  const page = String((e && e.parameter && e.parameter.page) || "").slice(0, 200);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ ok: false, error: "invalid_email" });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    const last = sheet.getLastRow();
    if (last > 1) {
      const existing = sheet.getRange(2, 2, last - 1, 1).getValues().flat();
      if (existing.some((v) => String(v).toLowerCase() === email)) {
        return json({ ok: true, duplicate: true });
      }
    }

    // Prefix with ' if it starts with a formula character, so a crafted
    // "email" can never be evaluated as a formula in the sheet.
    const safe = (v) => (/^[=+\-@]/.test(v) ? "'" + v : v);
    sheet.appendRow([new Date(), safe(email), safe(page)]);
    return json({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
