import { checkNames } from "../functions/checkNames";

describe("checkNames function", () => {
  test("Check for whitespace and return an array of strings if a space is present", () => {
    const input = "kate bryan";
    const output = ["kate", "bryan"];
    expect(checkNames(input)).toEqual(output);
  });
  test("If no spaces are present, it returns the string in an array", () => {
    const input = "kate";
    const output = ["kate"];
    expect(checkNames(input)).toEqual(output);
  });
  test("If more than two words are provided, only two are returned", () => {
    const input = "chuck norris kate bryan";
    const output = ["chuck", "norris"];
    expect(checkNames(input)).toEqual(output);
  });
  test("If a number is given, nothing is returned", () => {
    const input = "9";
    const output = "";
    expect(checkNames(input)).toEqual(output);
  });
  test("If a symbol is provided, nothing is returned", () => {
    const input = "~////±±±";
    const output = "";
    expect(checkNames(input)).toEqual(output);
  });
});
