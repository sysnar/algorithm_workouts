// @ts-check

/**
 * @param {number[][]} key
 * @param {number[][]} lock
 */
export function solution(key, lock) {
  // 열쇠 가로/세로 길이 = keyLength
  // 자물쇠 가로/세로 길이 = lockLength
  // 1. 전체 지도 그리기
  //  1.1 지도 크기 = (keyLength - 1) * 2 + lockLength
  //  1.2 전부 0으로 채우기
  let keyLength = key.length;
  let lockLength = lock.length;
  let mapLength = (keyLength - 1) * 2 + lockLength;
  let save = [...lock];
  let map = Array.from(Array(mapLength), () => Array(mapLength).fill(0));

  // 2. 자물쇠 돌기를 1로 표시하기

  // 3. 왼쪽 위부터 오른쪽 아래로 키를 넣어보기
  for (let i = 0; i < 4; i++) {
    for (let mapY = 0; mapY < mapLength; mapY++) {
      for (let mapX = 0; mapX < mapLength; mapX++) {
        // 초기화
        init();

        // key 넣기
        for (let keyY = 0; keyY < keyLength; keyY++) {
          for (let keyX = 0; keyX < keyLength; keyX++) {
            if (mapY + keyY < mapLength && mapX + keyX < mapLength) {
              map[mapY + keyY][mapX + keyX] += key[keyY][keyX];
            }
          }
        }
        // print(map);

        // 자물쇠 해제 시도
        if (canUnlock(map)) {
          return true;
        }
      }
    }

    // key 90도 회전
    key = rotate(key);
  }

  function init() {
    map = Array.from(Array(mapLength), () => Array(mapLength).fill(0));
    for (let mapY = 0; mapY < lockLength; mapY++) {
      for (let mapX = 0; mapX < lockLength; mapX++) {
        map[keyLength - 1 + mapY][keyLength - 1 + mapX] += lock[mapY][mapX];
      }
    }
  }

  function canUnlock(map) {
    for (let lockY = keyLength - 1; lockY < keyLength - 1 + lockLength; lockY++) {
      for (let lockX = keyLength - 1; lockX < keyLength - 1 + lockLength; lockX++) {
        if (map[lockY][lockX] != 1) {
          return false;
        }
      }
    }
    return true;
  }

  return false;
}

function rotate(array) {
  let max = array.length - 1;
  const result = Array.from(Array(array.length), () => Array(array[0].length).fill(0));

  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      let afterRow = col;
      let afterCol = max - row;

      result[afterRow][afterCol] = array[row][col];
    }
  }

  return result;
}

function print(map) {
  console.log("============START============");
  let temp = "";
  for (let m of map) {
    temp += JSON.stringify(m) + " \n";
  }
  console.log(temp);
  console.log("============END============");
}
