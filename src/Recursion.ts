export default function recursion(n: number): number {
    // base case
    if (n === 1) {
        return 1;
    }
    // recurse
    return n + recursion(n - 1);
}

