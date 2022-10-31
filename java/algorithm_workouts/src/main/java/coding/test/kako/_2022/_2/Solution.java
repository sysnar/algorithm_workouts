package coding.test.kako._2022._2;

import java.util.LinkedList;
import java.util.List;


public class Solution {

    public static void main(String[] args) {
        int solution = solution(new int[]{1, 2, 1, 2}, new int[]{1, 10, 1, 2});
        System.out.println("solution = " + solution);
    }

    public static int solution(int[] queue1, int[] queue2) {
        int answer = 0;

        LinkedList<Integer> list1 = new LinkedList<>();
        LinkedList<Integer> list2 = new LinkedList<>();
        long total1 = 0;
        long total2 = 0;

        for (int idx = 0; idx < queue1.length; idx++) {
            list1.add(queue1[idx]);
            list2.add(queue2[idx]);
            total1 += queue1[idx];
            total2 += queue2[idx];
        }

        // total 개수 세기
        while (answer < 3* queue1.length) {
            if (total1 > total2) {
                Integer pollElement = list1.poll();
                list2.add(pollElement);
                total1 -= pollElement;
                total2 += pollElement;
            } else if (total1 < total2) {
                Integer pollElement = list2.poll();
                list1.add(pollElement);
                total1 += pollElement;
                total2 -= pollElement;
            } else {
                return answer;
            }
            answer++;
        }

        return -1;
    }
}
