import { RecomendName } from ".";

test("예제 1번", () => {
  expect(RecomendName("...!@BaT#*..y.abcdefghijklm")).toBe("bat.y.abcdefghi");
});

test("예제 2번", () => {
  expect(RecomendName("z-+.^.")).toBe("z--");
});

test("예제 3번", () => {
  expect(RecomendName("=.=")).toBe("aaa");
});

test("예제 4번", () => {
  expect(RecomendName("123_.def")).toBe("123_.def");
});

test("예제 5번", () => {
  expect(RecomendName("abcdefghijklmn.p")).toBe("abcdefghijklmn");
});
