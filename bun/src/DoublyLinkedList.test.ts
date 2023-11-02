import {
    describe,
    beforeEach,
    test,
    expect,
} from "bun:test"
import DoublyLinkedList from './DoublyLinkedList';

describe('DoublyLinkedList', () => {

  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  test('starts empty', () => {
    expect(list.length).toBe(0);
    expect(list.head).toBeUndefined();
    expect(list.tail).toBeUndefined();
  });

  test('prepend adds element to start', () => {
    list.prepend(1);
    expect(list.length).toBe(1);
    expect(list.head!.value).toBe(1);

    list.prepend(2);
    expect(list.length).toBe(2);
    expect(list.head!.value).toBe(2);
  });

  test('append adds element to end', () => {
    list.append(1);
    expect(list.length).toBe(1);
    expect(list.tail!.value).toBe(1);

    list.append(2);
    expect(list.length).toBe(2);
    expect(list.tail!.value).toBe(2);
  });

  test('insertAt inserts element at index', () => {
    list.insertAt(1, 0);
    expect(list.length).toBe(1);
    expect(list.head!.value).toBe(1);

    list.insertAt(2, 1); 
    expect(list.length).toBe(2);
    expect(list.head!.next!.value).toBe(2);

    list.insertAt(3, 0);
    expect(list.length).toBe(3);
    expect(list.head!.value).toBe(3);
  });

  test('get retrieves element at index', () => {
    list.append(1);
    list.append(2);

    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
  });

  test('remove deletes element', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.remove(2)).toBe(2);
    expect(list.length).toBe(2);
    expect(list.head!.next!.value).toBe(3);
  });

  test('removeAt deletes element at index', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.removeAt(1)).toBe(2);
    expect(list.length).toBe(2);
    expect(list.head!.next!.value).toBe(3);
  });

});
