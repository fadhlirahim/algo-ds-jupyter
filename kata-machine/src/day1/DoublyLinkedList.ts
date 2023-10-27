class Node<T> {
    value: T;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}


export default class DoublyLinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    public length: number = 0;

    constructor() {}

    prepend(item: T): void {
        const newNode = new Node(item);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) throw new Error("Invalid index");
        if (idx === 0) return this.prepend(item);
        if (idx === this.length) return this.append(item);

        const newNode = new Node(item);
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
            if (!current) throw new Error("Invalid state");
            current = current.next;
        }
        newNode.next = current!.next;
        newNode.prev = current;
        current!.next!.prev = newNode;
        current!.next = newNode;

        this.length++;
    }

    append(item: T): void {
        const newNode = new Node(item);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        while (current) {
            if (current.value === item) {
                if (current.prev) current.prev.next = current.next;
                else this.head = current.next;

                if (current.next) current.next.prev = current.prev;
                else this.tail = current.prev;

                this.length--;
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            if (!current) return undefined;
            current = current.next;
        }
        return current!.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            if (!current) return undefined;
            current = current.next;
        }

        if (current!.prev) current!.prev.next = current!.next;
        else this.head = current!.next;

        if (current!.next) current!.next.prev = current!.prev;
        else this.tail = current!.prev;

        this.length--;
        return current!.value;
    }
}
