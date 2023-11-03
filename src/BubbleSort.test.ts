import { test, expect } from "bun:test";
import bubbleSort from "./BubbleSort";

test("bubbleSort", () => {
  const input = [5, 1, 4, 2, 8];
  bubbleSort(input);
  expect(input).toEqual([1, 2, 4, 5, 8]);
});
