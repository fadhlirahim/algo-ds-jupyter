class Node<T> {
    value: T;
    next?: Node<T>;
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>; 
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (!this.head) {
            return undefined;
        }

        if (this.length === 0) {
            this.tail = undefined;
        }

        // A -> B
        const head = this.head;
        this.head = head.next;
        head.next = undefined; // unlink the head node 

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
