import { describe, it, expect } from 'bun:test';
import Stack from './stack';

describe('Stack', () => {

  it('starts empty', () => {
    const stack = new Stack<number>();
    expect(stack.length).toBe(0);
  });

  it('pushes and pops', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    expect(stack.length).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.length).toBe(1);

    expect(stack.pop()).toBe(1);
    expect(stack.length).toBe(0);
  });

  it('peeks without popping', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.length).toBe(2);
  });

});
