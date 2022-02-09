function solution(clothes) {
  let answer = 1;
  const hashTable = new Map();

  for (let [clothing, type] of clothes) {
    hashTable.set(type, (hashTable.get(type) || 0) + 1);
  }

  for (const [key, value] of hashTable) {
    answer *= value + 1;
  }

  return answer - 1;
}
