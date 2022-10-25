import { ArrayQueue } from "./queue.js";

const queue = new ArrayQueue();
test("simple queue test", () => {
  queue.enqueue(1);
  queue.enqueue(3);
  queue.enqueue(2);

  expect(queue.array).toStrictEqual([1, 3, 2]);
  expect(queue.dequeue()).toBe(1);
  expect(queue.toString()).toBe("3 2 ");
  expect(queue.front()).toBe(3);
  expect(queue.rear()).toBe(2);
  expect(queue.empty()).toBe(false);
});
