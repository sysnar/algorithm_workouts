import { lengthOfLastWord1, lengthOfLastWord2 } from ".";

describe("length of last word", () => {
  test("solve with javascript method - one line", () => {
    expect(lengthOfLastWord1("Hello World")).toEqual(5);
    expect(lengthOfLastWord1("   fly me   to   the moon  ")).toEqual(4);
    expect(lengthOfLastWord1("luffy is still joyboy")).toEqual(6);
  });

  test("check blank from the last", () => {
    expect(lengthOfLastWord2("Hello World")).toEqual(5);
    expect(lengthOfLastWord2("   fly me   to   the moon  ")).toEqual(4);
    expect(lengthOfLastWord2("luffy is still joyboy")).toEqual(6);
  });
});
