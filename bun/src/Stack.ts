type Node<T> = {
  value: T,
  prev?: Node<T>,
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

 push(item: T): void {
    this.length++;

    const new_node = { value: item } as Node<T>;

    if (!this.head) {
      this.head = new_node;
      return;
    }

    new_node.prev = this.head;
    this.head = new_node;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);

    if (!this.head) {
      return undefined; 
    }

    const node = this.head;
    this.head = node.prev;
    node.prev = undefined;

    return node.value;
  }
  
  peek(): T | undefined {
    return this.head?.value;
  }
}


