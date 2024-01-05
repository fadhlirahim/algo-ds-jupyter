function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
    // What's the base case?
    if (!curr) {
        return path;
    }
    
    // recurse
    walk(curr.left, path);
    // in order
    path.push(curr.value);
    walk(curr.right, path);
    
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
