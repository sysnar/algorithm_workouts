import { solution } from ".";

test("예제 1번", () => {
  expect(solution(2, ["slang", "badword"], "badword ab.cd bad.ord .word sl.. bad.word")).toEqual(
    "####### ab.cd ####### .word #### bad.word"
  );
});
