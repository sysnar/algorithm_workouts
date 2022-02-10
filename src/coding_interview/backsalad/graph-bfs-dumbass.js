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

// 연결된 섬들을 하나의 그래프로 묶는 과정

// Case 1.
// (0, 0) -> (1, 0)
// (0, 0) -> (0, 1)

// (1, 0) -> (0, 0)

// (0, 1) -> (0, 0)

// Case 2.
// (1, 3) -> (2, 3) / (1, 4) / (0, 3) / (1, 2)

// (0, 4) ->

// (1, 4) ->

// (2, 4) ->

// 주변에 인접하지 않은 노드를 가진
// 섬인것을 인지하기 위해
const visited = [];

for (let x = 0; x < map.length; x++) {
  for (let y = 0; y < map[0].length; y++) {
    // 해당 섬에 방문하였을 경우 통과
    if (visited[y][x] === 1) {
    }
    // 방문하지 않았을 경우 주변의 육지를 방문으로 변경
    else {
    }
  }
}

// function searchNearBy(islandX, islandY) {
// if () {

// }
// }
