import { describe, expect, it } from 'vitest';

function add(a: number, b: number) {
  return a + b;
}

describe('math unit tests', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles zero values', () => {
    expect(add(0, 0)).toBe(0);
  });
});
