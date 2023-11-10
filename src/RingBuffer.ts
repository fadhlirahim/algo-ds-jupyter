export default class RingBuffer<T> {
  private buffer: Array<T>;
  private head: number;
  private tail: number;
  private capacity: number;
  private size: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.buffer = new Array<T>(capacity);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
  
  enqueue(item: T): void {
    this.buffer[this.tail] = item; // Sets the item at the current tail position, overwriting if necessary
    this.tail = (this.tail + 1) % this.capacity; // Moves the tail to the next position
    
    if(this.isFull()) {
      this.head = (this.head + 1) % this.capacity;// Moves the head if we're overwriting.
    } else {
      this.size++; // Increase the size only if we're not overwriting
    }
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      const item = this.buffer[this.head];
      this.head = (this.head + 1) % this.capacity;
      this.size--;
      return item;
    }
  }
}

