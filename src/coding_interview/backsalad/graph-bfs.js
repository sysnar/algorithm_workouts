// 2차원 배열 map은 모두 정수 타입 숫자들로 채워져 있다.
// 여기서 0은 바다를 뜻하고 0 이외의 값은 땅을 뜻한다. map에 몇 개의 섬이 있는지 반환하는 함수를 구현하라.
const map = [
  [1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
];
// the return value should be 3

// 가로 세로 위 아래로 이어질 경우 하나의 섬으로 간주한다.
// 대각선은 이어져있다고 간주하지 않는다.
// 입력값의 경우 N * M으로 제공되며, 다양한 경우의 수를 고려하여 작성해야 한다.

// -------------- 문제해결 --------------

let answer = 0;

// 전체 배열 순회를 통해 모든 섬을 방문한다. (섬, 바다 여부에 관계없이 모두 방문)
for (let positionY = 0; positionY < map.length; positionY++) {
  for (let positionX = 0; positionX < map[0].length; positionX++) {
    // 섬에 해당하는 경우 주변의 섬을 찾는다.
    if (map[positionY][positionX] === 1) {
      // 주변의 섬을 더 찾기 위해 BFS 혹은 DFS를 실행한다.
      mapBFS(positionY, positionX);
      //mapDFS(positionY, positionX);
    }
  }
}

function mapBFS(positionY, positionX) {
  const searchPosition = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  // 검색을 시작하는 노드의 경우 항상 섬이다
  // 해당 섬을 방문했음을 명시하기 위해 원본 지도에서 섬을 지운다
  // 혹은 visted와 같이 방문한 기록을 저장하는 배열을 선언하는 것 또한 방법이다.
  // 하지만 이렇게 할 경우 공간복잡도가 올라갈 수 있는 단점이 있다.
  map[positionY][positionX] = 0;

  // BFS를 위해 queue에 현재 포지션을 저장
  const queue = [[positionY, positionX]];

  while (queue.length) {
    const [y, x] = queue.shift();
    for (let moves of searchPosition) {
      const [moveY, moveX] = moves;
      if (y + moveY >= 0 && x + moveX >= 0 && y + moveY < map.length && x + moveX < map[0].length) {
        if (map[y + moveY][x + moveX] === 1) {
          map[y + moveY][x + moveX] = 0;
          queue.push([y + moveY, x + moveX]);
        }
      }
    }
  }

  answer++;
}
console.log(answer);
