export function solution(progresses, speeds) {
  let answer = [];
  const queue = new Queue(progresses.reverse());
  const speed = speeds.reverse();

  while (queue.size()) {
    let finishedWorkCount = 0;
    let temp = queue.size();

    for (let work = 0; work < temp; work++) {
      if (!queue.isFinished()) {
        break;
      }
      finishedWorkCount++;
      queue.remove();
      speed.pop();
    }

    if (finishedWorkCount) {
      answer.push(finishedWorkCount);
    }
    queue.work(speed);
  }

  return answer;
}

class Queue {
  constructor(data = []) {
    this.queue = data;
  }

  work(speed) {
    for (let index = 0; index < speed.length; index++) {
      if (this.queue[index] < 100) {
        this.queue[index] += speed[index];
      }
    }
  }

  isFinished() {
    if (this.peek() >= 100) {
      return true;
    }

    return false;
  }

  add(data) {
    this.queue.unshift(data);
  }

  remove() {
    return this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }

  size() {
    return this.queue.length;
  }
}
