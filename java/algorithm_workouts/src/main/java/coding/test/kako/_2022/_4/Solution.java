package coding.test.kako._2022._4;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;


public class Solution {

    public static void main(String[] args) {
        int[] solution = new Solution().solution(
                6,
                new int[][]{
                        {1, 2, 3},
                        {2, 3, 5},
                        {2, 4, 2},
                        {2, 5, 4},
                        {3, 4, 4},
                        {4, 5, 3},
                        {4, 6, 1},
                        {5, 6, 1}
                },
                new int[]{1, 3},
                new int[]{5});
        System.out.println("solution = " + Arrays.toString(solution));
    }

    public int[] solution(int n, int[][] paths, int[] gates, int[] summits) {
        Arrays.sort(summits);
        boolean[] isGate = new boolean[n + 1];
        boolean[] isSummit = new boolean[n + 1];
        int[] intensity = new int[n + 1];
        ArrayList<ArrayList<Node>> graph = new ArrayList<>();

        for (int i = 0; i < n + 1; i++) {
            graph.add(new ArrayList<>());
            intensity[i] = Integer.MAX_VALUE;
        }
        for (int gate : gates) {
            isGate[gate] = true;
            intensity[gate] = 0;
        }
        for (int summit : summits) {
            isSummit[summit] = true;
        }
        // graph 세팅
        for (int[] path : paths) {
            int currentIdx = path[0];
            int nextIdx = path[1];
            int weight = path[2];

            // 현재 산봉우리가 아니고, 다음이 출발지가 아닌 경우
            // 출발지 -> 휴개소 + 휴개소 -> 산봉우리
//            if (!isSummit[currentIdx] && !isGate[nextIdx])
                graph.get(currentIdx).add(new Node(nextIdx, weight));

//            // 현재 출발지가 아니고, 다음이 산봉우리가 아닌 경우
//            // 휴개소 -> 출발지 + 산봉우리 -> 출발지
//            // 사실상 필요없음
//            if (!isSummit[nextIdx] && !isGate[currentIdx])
                graph.get(nextIdx).add(new Node(currentIdx, weight));
        }
        System.out.println("graph = " + graph);

        PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        for (int gate : gates) {
            queue.add(new int[]{gate, 0});
        }

        while (!queue.isEmpty()) {
            System.out.println("intensity = " + Arrays.toString(intensity));
            int[] pollNode = queue.poll();
            int next = pollNode[0], weight = pollNode[1];
            System.out.println("pollNode = " + Arrays.toString(pollNode));

            if(isSummit[next]) continue;
            if(intensity[next] < weight) continue;

            for (Node node : graph.get(next)) {
                System.out.println("node = " + node);

                if(isGate[node.next]) continue;
                if(intensity[node.next] <= Math.max(intensity[next], node.weight)) continue;
                intensity[node.next] = Math.max(intensity[next], node.weight);
                if(isSummit[node.next]) continue;
                queue.add(new int[]{node.next, intensity[node.next]});
            }
        }

        int min = Integer.MAX_VALUE;
        int[] answer = {};
        for (int summit : summits) {
            if (min > intensity[summit]) {
                min = intensity[summit];
                answer = new int[]{summit, min};
            }
        }
        System.out.println("graph = " + graph);
        System.out.println("intensity = " + Arrays.toString(intensity));
        return answer;
    }

    class Node {

        public int next;
        public int weight;

        public Node(int next, int weight) {
            this.next = next;
            this.weight = weight;
        }

        @Override
        public String toString(){
            return next + " " + weight;
        }

    }
}
