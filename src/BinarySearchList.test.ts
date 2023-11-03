import { describe, it, expect } from 'bun:test';

import bs_list from './BinarySearchList';

describe('bs_list', () => {

  it('should return true if needle is found', () => {
    const haystack = [1, 2, 3, 4, 5]; 
    const needle = 3;
    expect(bs_list(haystack, needle)).toBe(true);
  });

  it('should return false if needle is not found', () => {
    const haystack = [1, 2, 3, 4, 5];
    const needle = 6; 
    expect(bs_list(haystack, needle)).toBe(false);
  });

});

