import { describe, it, expect } from 'bun:test';

import binarySearch from './BinarySearchList';

describe('binarySearch', () => {

  it('should return true if needle is found', () => {
    const haystack = [1, 2, 3, 4, 5]; 
    const needle = 3;
    expect(binarySearch(haystack, needle)).toBe(true);
  });

  it('should return false if needle is not found', () => {
    const haystack = [1, 2, 3, 4, 5];
    const needle = 6; 
    expect(binarySearch(haystack, needle)).toBe(false);
  });

});

