// Sets the footer year. Kept in a module so pages need no inline script (strict CSP).
export function setYear(doc = document, now = new Date()) {
  const el = doc.getElementById('yr');
  if (el) el.textContent = String(now.getFullYear());
}
