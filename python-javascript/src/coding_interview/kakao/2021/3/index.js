/**
 * search
 * @param {string[]} info
 * @param {string[]} query
 * @returns number[]
 */
export function search(info, query) {
  const preparement = {};
  for (let language of ["java", "python", "cpp", "-"])
    for (let jobGroup of ["backend", "frontend", "-"])
      for (let career of ["junior", "senior", "-"])
        for (let soulFood of ["pizza", "chicken", "-"])
          preparement[language + jobGroup + career + soulFood] = [];

  for (let i of info) {
    const keys = i.split(" ");
    for (const language of [keys[0], "-"])
      for (const jobGroup of [keys[1], "-"])
        for (const career of [keys[2], "-"])
          for (const soulFood of [keys[3], "-"]) {
            preparement[language + jobGroup + career + soulFood].push(Number(keys[4]));
          }
  }

  for (let index in preparement) {
    preparement[index].sort((a, b) => a - b);
  }

  const answer = [];
  for (let q in query) {
    q = query[q].split(" ");
    const pool = preparement[q[0] + q[2] + q[4] + q[6]];
    const score = Number(q[7]);

    let left = 0;
    let right = pool.length;
    let mid = 0;
    while (left < right) {
      mid = Math.floor((left + right) / 2);
      if (pool[mid] >= score) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    answer.push(pool.length - left);
  }

  return answer;
}

function binarySearch() {}
