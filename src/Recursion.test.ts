import { expect, describe } from 'bun:test';
import recursion from './Recursion';

describe('recursion', () => {

  it('should return 1 when n is 1', () => {
    expect(recusion(1)).toBe(1); 
  });

  it('should return the sum from 1 to n', () => {
    expect(recursion(4)).toBe(10);
    expect(recursion(5)).toBe(15);
  });

  it('should throw an error if n is less than 1', () => {
    expect(() => recursion(0)).toThrow();
    expect(() => recursion(-1)).toThrow();
  });

});
