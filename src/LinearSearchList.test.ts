import { describe, it, expect } from 'bun:test';
import linearSearch from './LinearSearchList';

describe('linearSearch', () => {

  it('should return true if the needle is in the haystack', () => {
    const haystack = [1, 2, 3, 4, 5]; 
    const needle = 3;
    expect(linearSearch(haystack, needle)).toBe(true);
  });

  it('should return false if the needle is not in the haystack', () => {
    const haystack = [1, 2, 3, 4, 5];
    const needle = 6; 
    expect(linearSearch(haystack, needle)).toBe(false); 
  });

});
