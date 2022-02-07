class Hash {
  constructor(hashNumber) {
    this.hashNumber = hashNumber;
    this.data = new Array(hashNumber);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      let char = key.charCodeAt(i);
      hash = (hash + char) % this.hashNumber;
    }

    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }

    this.data[hash].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    for (let node of this.data[address]) {
      if (node[0] === key) {
        return node[1];
      }
    }
  }

  check(key) {
    const address = this._hash(key);
    if (this.data[address]) {
      for (let node of this.data[address]) {
        if (node[0] === key && node[1] === 1) {
          node[1] = 0;
          return node[0];
        }
      }
    }
  }
}

export function solution(participant, completion) {
  let answer = "";
  const hashTable = new Hash(50);

  for (let player of completion) {
    hashTable.set(player, 1);
  }
  console.log(hashTable.data);

  for (let player of participant) {
    if (!hashTable.check(player)) {
      answer = player;
    }
  }

  return answer;
}
solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
