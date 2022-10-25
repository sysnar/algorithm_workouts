// @ts-check

/**
 * 1. 아이디어
 * 2. 시간복잡도
 * 3. 자료구조
 */
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} fires
 * @param {number[][]} ices
 */
export function solution(n, m, fires, ices) {
  const map = new NewMap(n);
  for (let i = 0; i < m; i++) {
    map.addTime();
    for (let fire of fires) {
      map.travelFire(fire[0] - 1, fire[1] - 1);
    }
    for (let ice of ices) {
      map.travelIce(ice[0] - 1, ice[1] - 1);
    }
  }
  let p = "";
  for (let m of map.map) {
    p += JSON.stringify(m) + "\n";
  }
  console.log(p);
  return map.map;
}

class NewMap {
  constructor(n) {
    this.map = Array.from(Array(n), () => Array(n).fill(0));
    this.time = 0;
    this.maxLength = n;
  }

  addTime() {
    this.time++;
  }

  travelFire(fireY, fireX) {
    for (let y = -this.time; y <= this.time; y++) {
      for (let x = -this.time; x <= this.time; x++) {
        let currentX = fireX + x;
        let currentY = fireY + y;

        if (currentY >= 0 && currentX >= 0 && currentY < this.maxLength && currentX < this.maxLength) {
          this.map[currentY][currentX]++; // 정사각형 범위 +1
        }
      }
    }
  }

  travelIce(iceY, iceX) {
    for (let y = -this.time; y <= this.time; y++) {
      for (let x = -this.time; x <= this.time; x++) {
        let currentX = iceX + x;
        let currentY = iceY + y;

        if (currentY >= 0 && currentX >= 0 && currentY < this.maxLength && currentX < this.maxLength) {
          if (Math.abs(x + y) <= this.time) {
            this.map[currentY][currentX]--; // 십자가 형태 -1
          }
        }
      }
    }
  }
}
