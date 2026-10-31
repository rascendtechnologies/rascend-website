import { describe, it, expect } from 'vitest';
import { setYear } from '../src/js/year.js';

describe('setYear', () => {
  it('writes the current year into #yr', () => {
    document.body.innerHTML = '<span id="yr">2000</span>';
    setYear(document, new Date('2031-05-01T00:00:00Z'));
    expect(document.getElementById('yr').textContent).toBe('2031');
  });
  it('does nothing when the element is missing', () => {
    document.body.innerHTML = '';
    expect(() => setYear(document)).not.toThrow();
  });
});
