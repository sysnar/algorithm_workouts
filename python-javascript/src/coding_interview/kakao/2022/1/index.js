// @ts-check

/**
 * @param {string[]} id_list
 * @param {string[]} report
 * @param {number} k
 */
export function report(id_list, report, k) {
  const reports = {};
  const counts = {};
  const result = new Array(id_list.length).fill(0);
  for (let id of id_list) {
    reports[id] = [];
    counts[id] = 0;
  }

  for (let r of report) {
    let [reporter, target] = r.split(" ");
    if (!reports[reporter].includes(target)) {
      reports[reporter].push(target);
      counts[target]++;
    }
  }

  let i = 0;
  for (let r in reports) {
    for (let j of reports[r]) {
      if (counts[j] >= k) {
        result[i]++;
      }
    }
    i++;
  }

  return result;
}
