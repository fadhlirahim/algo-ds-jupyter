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
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (!this.head) {
            return;
        }
       
        // we need to move the pointer to the previous node
        // C <-- B <-- A (removing A)
        const node = this.head;
        this.head = node?.prev;
        return node.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
