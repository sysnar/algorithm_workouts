// @ts-check

const INF = Infinity;

/**
 * @param {number} n
 * @param {number} s
 * @param {number} a
 * @param {number} b
 * @param {number[][]} fares
 */
export function calculateCharge(n, s, a, b, fares) {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(INF));

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  for (const fare of fares) {
    const [from, to, cost] = fare;
    graph[from][to] = cost;
    graph[to][from] = cost;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][j] > graph[i][k] + graph[k][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }

  let result = INF;

  for (let i = 1; i <= n; i++) {
    result = Math.min(result, graph[s][i] + graph[i][a] + graph[i][b]);
  }

  return result;
}
