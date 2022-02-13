// -------------- 문제설명 및 조건 --------------
// 2차원 배열 map은 모두 정수 타입 숫자들로 채워져 있다.
// 여기서 0은 바다를 뜻하고 0 이외의 값은 땅을 뜻한다. map에 몇 개의 섬이 있는지 반환하는 함수를 구현하라.
const map = [
  [true, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
];
// the return value should be 3

// 가로 세로 위 아래로 이어질 경우 하나의 섬으로 간주한다.
// 대각선은 이어져있다고 간주하지 않는다.
// 입력값의 경우 N * M으로 제공되며, 다양한 경우의 수를 고려하여 작성해야 한다.
// ------------------------------------------

// -------------- 문제해결 --------------

// # 시간복잡도 : O(N * M)
// 인터뷰를 진행할 당시 위의 시간복작도에 대해 부담을 느끼고 더 나은 해결방법을 찾고자 하였으나,
// 문제의 특성상 각 섬들간의 연관관계가 설정되어 있지 않아 어려움이 있다고 판단하였습니다.
// 결과적으로 주어지는 배열의 모든 노드를 탐색하여 섬의 개수를 세는 방법으로 해결하였습니다.

// # 문제 해결과정은 아래와 같습니다.
// 1. 중첨 루프를 통해 전체 지도를 순회합니다.
// 2. 순회과정에서 육지(1)을 발견할 경우 주변의 추가적인 육지(1)가 있는지 탐색합니다.
// 2.1. 추가적인 육지가 있을 경우 BFS를 통해 반복해서 탐색합니다.
// 2.2. 발견한 육지들은 재탐색하지 않기 위해 육지(0)에서 바다(0)로 변경합니다.
// 3. 발견한 섬에 포함된 모든 육지(1)를 모두 바다(0)로 변경한 뒤 [1]번에서 진행하던 전체 지도 순회를 계속합니다.

// # 해결노트
// 1. DFS 대신 BFS를 사용한 이유?
//  - 찾고자하는 노드들이 상,하,좌,우에 위치하여 인접한 특성을 띄기 때문에,
//    BFS를 사용해 인접한 노드(육지)를 찾는 것이 더 효과적인 탐색전략일 것이라고 생각하였습니다.

// 2. 육지의 값 처리
//  - 주신 문제의 내용과 같이 바다의 값이 0이 아닌 경우만을 육지로 지정하였습니다.
//    Javascript에서 0과 유사하게 동작할 수 있는 null, undefined, boolean, 실수 등의 값이 입력될 경우
//    모두 육지로써 인식하도록 코드를 작성하였습니다.

// 3. 별도의 알고리즘 활용 가능성 고려
//  - 추후 요구사항의 변화로 BFS 이외의 알고리즘이 효과적인 때가 올 경우를 대비하였습니다.
//    탐색 알고리즘 내부에서 섬의 개수를 증가시키는 것이 아닌,
//    전체 지도 순회에서 섬을 발견하였을 때에 값을 증가시키도록 코드를 작성하였습니다.
// --------------------------------------

class IslandMap {
  constructor(map) {
    this.map = map;
    this.MAX_WIDTH = map[0].length;
    this.MAX_HEIGHT = map.length;
    this.answer = 0;
    this.movePosition = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
  }

  travel() {
    // 전체 배열 순회를 통해 모든 섬을 방문한다. (섬, 바다 여부에 관계없이 모두 방문)
    for (let positionY = 0; positionY < this.MAX_HEIGHT; positionY++) {
      for (let positionX = 0; positionX < this.MAX_WIDTH; positionX++) {
        // 주변의 육지를 섬으로 취급하지 않기 위해, 섬에 존재하는 육지(1)을 바다(0)로 수정하여 다시 카운트하지 않도록 합니다.
        if (this.map[positionY][positionX]) {
          this.searchLandBFS(positionY, positionX); // (선택 1)
          // OR
          //this.searchLandDFS(positionY, positionX); // (선택 2)
          this.answer++; // 육지에 해당하는 경우 섬 개수를 1 증가시킨다.
        }
      }
    }
  }

  searchLandBFS(currentY, currentX) {
    const queue = [[currentY, currentX]]; // BFS를 위해 queue에 현재 위치을 저장

    // queue에 탐색해야할 노드가 들어있는 동안 반복
    while (queue.length) {
      const [y, x] = queue.shift();
      this.map[y][x] = 0;

      // 좌, 우, 상, 하 순서대로 탐색을 진행
      for (let moves of this.movePosition) {
        // 탐색할 노드를 설정
        const moveY = y + moves[0];
        const moveX = x + moves[1];

        // 현재 위치에서 탐색할 노드 중 범위에서 벗어난 경우를 제외
        if (moveY >= 0 && moveX >= 0 && moveY < this.MAX_HEIGHT && moveX < this.MAX_WIDTH) {
          // 탐색한 노드가 바다가 아닐 경우 queue에 추가하여 주변에 육지가 존재하는 지 탐색
          if (this.map[moveY][moveX] !== 0) {
            queue.push([moveY, moveX]);
          }
        }
      }
    }
  }

  /**
   * 현재 위치에서 가장 먼 육지부터 탐색하는 함수
   */
  searchLandDFS(currentY, currentX) {
    this.map[currentY][currentX] = 0;

    // 좌, 우, 상, 하 순서대로 탐색을 진행
    for (let moves of this.movePosition) {
      // 탐색할 노드를 설정
      const moveY = currentY + moves[0];
      const moveX = currentX + moves[1];

      // 현재 위치에서 탐색할 노드 중 범위에서 벗어난 경우를 제외
      if (moveY >= 0 && moveX >= 0 && moveY < this.MAX_HEIGHT && moveX < this.MAX_WIDTH) {
        // 탐색한 노드가 바다가 아닐 경우 재귀함수를 호출하여 주변에 육지가 존재하는 지 탐색
        if (this.map[moveY][moveX] !== 0) {
          this.searchLandDFS(moveY, moveX);
        }
      }
    }
  }

  getAnswer() {
    return this.answer;
  }
}

const islandMap = new IslandMap(map);
islandMap.travel();

if (islandMap.getAnswer() === 3) {
  console.log(`정답입니다 : ${islandMap.getAnswer()}`);
} else {
  console.log(`오답입니다. ${islandMap.getAnswer()}`);
}
