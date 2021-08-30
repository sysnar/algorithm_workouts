// Queue With Array
class ArrayQueue {
  constructor() {
    this.array = [];
  }

  enqueue(data) {
    this.array.push(data);
  }

  dequeue() {
    return this.array.shift();
  }

  toString() {
    let str = "";
    for (let i = 0; i < this.array.length; i++) {
      str = str + this.array[i] + " "
    }
    return str;
  }

  front() {
    return this.array[0];
  }

  rear() {
    return this.array[this.array.length - 1];
  }

  empty() {
    if (this.array.length == 0) {
      return true;
    }
    return false;
  }
}

class LinkedListQueue {

}

export { ArrayQueue, LinkedListQueue }
// 출처 : https://overcome-the-limits.tistory.com/entry/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%ED%81%90-with-JavaScript