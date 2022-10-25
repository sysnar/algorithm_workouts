package coding.test.kako._2022._1;

import java.util.HashMap;

class Solution {
    public static  String solution(String[] survey, int[] choices) {
        String answer = "";
        char[][] type = {{'R', 'T'}, {'C', 'F'}, {'J', 'M'}, {'A', 'N'}};
        int[] score = {0, 3, 2, 1, 0, 1, 2, 3};
        HashMap<Character, Integer> point = new HashMap<>();

        for (char[] t : type) {
            point.put(t[0], 0);
            point.put(t[1], 0);
        }

        for (int idx = 0; idx < choices.length; idx++){
            if (choices[idx] > 4){
                point.put(survey[idx].charAt(1), point.get(survey[idx].charAt(1)) + score[choices[idx]]);
            } else {
                point.put(survey[idx].charAt(0), point.get(survey[idx].charAt(0)) + score[choices[idx]]);
            }
        }

        for (char[] t : type) {
            answer += (point.get(t[1]) <= point.get(t[0])) ? t[0] : t[1];
        }

        return answer;
    }

    public static void main(String[] args) {
        System.out.println("123 = " + 123);
        System.out.println(solution(new String[]{"AN", "CF", "MJ", "RT", "NA"}, new int[]{5, 3, 2, 7, 5}));
    }
}