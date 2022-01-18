export class Stack {
  constructor() {
    this._data = [];
  }

  push(record) {
    this._data.push(record);
  }

  pop() {
    return this._data.pop();
  }

  peek() {
    return this._data[this._data.length - 1];
  }
}
