export class Queue {
  constructor() {
    this._data = [];
  }

  add(record) {
    this._data.unshift(record);
  }

  remove() {
    return this._data.pop();
  }
}
