function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
    // What's the base case?
    if (!curr) {
        return path;
    }
    // What's the recursive case?
    // pre
    path.push(curr.value);

    // What's the recursive step?
    walk(curr.left, path);
    walk(curr.right, path);
    
    // What's the return value?
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {

    return walk(head, []);
}
