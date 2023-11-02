import { describe, it, expect } from 'bun:test';
import linear_search from './LinearSearchList';

describe('linear_search', () => {

  it('should return true if the needle is in the haystack', () => {
    const haystack = [1, 2, 3, 4, 5]; 
    const needle = 3;
    expect(linear_search(haystack, needle)).toBe(true);
  });

  it('should return false if the needle is not in the haystack', () => {
    const haystack = [1, 2, 3, 4, 5];
    const needle = 6; 
    expect(linear_search(haystack, needle)).toBe(false); 
  });

});
