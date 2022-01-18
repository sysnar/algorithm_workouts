import { Queue } from "./queue";

export function weave(sourceOne, sourceTwo) {
  const queue = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      queue.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      queue.add(sourceTwo.remove());
    }
  }

  return queue;
}
