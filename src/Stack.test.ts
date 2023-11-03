import { describe, it, expect, beforeEach } from 'bun:test';
import Stack from './Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  })

  it('starts empty', () => {
    expect(stack.length).toBe(0);
  });

  it('pushes and pops', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.length).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.length).toBe(1);

    expect(stack.pop()).toBe(1);
    expect(stack.length).toBe(0);
  });

  it('peeks without popping', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.length).toBe(2);
  });

});
