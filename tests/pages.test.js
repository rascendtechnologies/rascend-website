// Guards the rules that keep the site safe under a strict Content Security Policy
// and keep links honest.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const pages = ['index.html', 'support.html', 'privacy.html'];

describe.each(pages)('%s', (page) => {
  const html = readFileSync(page, 'utf8');
  it('has no inline script, style or event handlers', () => {
    expect(html).not.toMatch(/<script>(?!\s*<\/script>)/);
    expect(html).not.toMatch(/<style[\s>]/i);
    expect(html).not.toMatch(/\son[a-z]+="/i);
  });
  it('has a title and description', () => {
    expect(html).toMatch(/<title>[^<]+<\/title>/);
    expect(html).toMatch(/<meta name="description"/);
  });
  it('opens external links safely', () => {
    const blank = html.match(/<a [^>]*target="_blank"[^>]*>/g) ?? [];
    for (const tag of blank) expect(tag).toContain('rel="noopener"');
  });
  it('does not link to GitHub profiles or source', () => {
    expect(html).not.toMatch(/github\.com\/rohan/i);
  });
});
