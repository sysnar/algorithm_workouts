import { addBinary } from "./index2";

test("addBinary - 1", () => {
  expect(addBinary("11", "1")).toEqual("100");
  expect(addBinary("1010", "1011")).toEqual("10101");
});
