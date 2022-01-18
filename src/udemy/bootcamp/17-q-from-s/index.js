import { Stack } from "./stack";

export class Queue {
  constructor() {
    this._first = new Stack();
    this._second = new Stack();
  }

  add(record) {
    this._first.push(record);
  }

  remove() {
    while (this._first.peek()) {
      this._second.push(this._first.pop());
    }

    const record = this._second.pop();

    while (this._second.peek()) {
      this._first.push(this._second.pop());
    }

    return record;
  }

  peek() {
    while (this._first.peek()) {
      this._second.push(this._first.pop());
    }

    const record = this._second.peek();

    while (this._second.peek()) {
      this._first.push(this._second.pop());
    }

    return record;
  }
}
