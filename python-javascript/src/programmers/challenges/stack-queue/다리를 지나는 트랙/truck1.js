export function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  const start = new Node(truck_weights.shift(), bridge_length);
  let bridge = new Queue(start);

  while (bridge.getBridgeWeight()) {
    bridge.moveTruck(); // 트럭을 앞으로 옮김

    // 트럭무게가 max가 아닐 경우
    // 다음에 올라올 트럭무게와의 함이 max이하일 경우
    // 최대 트럭 수가 max가 아닐 경우
    const brigeWeight = bridge.getBridgeWeight();
    if (brigeWeight + truck_weights[0] <= weight && bridge.getBridgeLength() < bridge_length) {
      bridge.addTruck(new Node(truck_weights.shift(), bridge_length));
    }

    answer++;
  }

  return answer;
}

class Queue {
  constructor(node) {
    this.queue = [node];
  }

  addTruck(node) {
    this.queue.unshift(node);
  }

  moveTruck() {
    const temp = [];
    for (let node of this.queue) {
      if (node.downTime()) {
        temp.push(node);
      }
    }
    this.queue = temp;
  }

  getBridgeLength() {
    return this.queue.length;
  }

  getBridgeWeight() {
    let bridgeWeight = 0;

    for (let node of this.queue) {
      bridgeWeight += node.weight;
    }

    return bridgeWeight;
  }
}

class Node {
  constructor(weight, remainLength) {
    this.weight = weight;
    this.remainLength = remainLength;
  }

  downTime() {
    return --this.remainLength;
  }
}

// console.log(solution(2, 10, [7, 4, 5, 6]));
