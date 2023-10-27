class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export default class SinglyLinkedList<T> {
    private head: Node<T> | null = null;

    public length = 0;

    prepend(item: T) {
        const newNode = new Node(item);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAt(item: T, index: number) {
        if (index < 0 || index > this.length) return;

        const newNode = new Node(item);
        let curr = this.head;

        if (index === 0) {
            this.prepend(item);
            return;
        }

        for (let i = 0; i < index - 1; i++) {
            curr = curr!.next;
        }

        newNode.next = curr!.next;
        curr!.next = newNode;

        this.length++;
    }

    append(item: T) {
        const newNode = new Node(item);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }

        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head) return undefined;

        if (this.head.value === item) {
            this.head = this.head.next;
            this.length--;
            return item;
        }

        let curr = this.head;
        while (curr.next && curr.next.value !== item) {
            curr = curr.next;
        }

        if (curr.next) {
            const removed = curr.next.value;
            curr.next = curr.next.next;
            this.length--;
            return removed;
        }

        return undefined;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return;

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr!.next;
        }
        return curr!.value;
    }

    removeAt(index: number) {
        if (index < 0 || index >= this.length) return;

        if (index === 0) return this.remove(this.head!.value);

        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr!.next;
        }

        const removed = curr!.next!.value;
        curr!.next = curr!.next!.next;
        this.length--;

        return removed;
    }
}
