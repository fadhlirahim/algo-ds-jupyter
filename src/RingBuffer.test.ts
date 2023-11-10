import { describe, it, expect, beforeEach } from 'bun:test';
import RingBuffer from './RingBuffer';
import { watch } from 'fs';

describe('RingBuffer', () => {

  let buffer: RingBuffer<number>;

  beforeEach(() => {
    buffer = new RingBuffer(5);
  });

  it('should create empty buffer', () => {
    expect(buffer.size).toBe(0);
    expect(buffer.isEmpty()).toBe(true);
  });

  it('should enqueue and dequeue items', () => {
    buffer.enqueue(1);
    buffer.enqueue(2);
    expect(buffer.dequeue()).toBe(1);
    expect(buffer.dequeue()).toBe(2);
  });

  it('should return null when dequeue from empty buffer', () => {
    expect(buffer.dequeue()).toBeNull();
  });

  it('should overwrite oldest item when full', () => {
    for(let i = 0; i < 5; i++) {
      buffer.enqueue(i);
    }

    buffer.enqueue(5);
    expect(buffer.buffer[0]).toEqual(5)
    expect(buffer.dequeue()).toBe(1);
  });
});

