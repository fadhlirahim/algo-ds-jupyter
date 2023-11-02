import { describe, it, expect, beforeEach } from 'bun:test';
import Queue from './Queue';


describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue();
  });

  it('starts empty', () => {
    expect(queue.length).toBe(0);
    expect(queue.peek()).toBeUndefined();
  });

  it('can enqueue and dequeue items', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.length).toBe(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.length).toBe(1);

    expect(queue.dequeue()).toBe(2);
    expect(queue.length).toBe(0);
  });

  it('returns undefined when dequeuing empty queue', () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  it('can peek at the front item', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.length).toBe(2);
  });

  it('returns undefined when peeking empty queue', () => {
    expect(queue.peek()).toBeUndefined();
  });

});
