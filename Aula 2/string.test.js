const StringManipulations = require('./atividade1');

describe("String Manipulations class", () => {

  str = "babble";
  const stringManipulations = new StringManipulations(str);

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("if matches the first given string", () => {
    const output = "b";

    expect(stringManipulations.findFirstMatch("b")).toEqual(output);
    expect(stringManipulations.findFirstMatch("B")).toEqual(output);
    expect(stringManipulations.findFirstMatch("Z")).toEqual("");
  });

  test("if matches the last given string", () => {
    const output = "b";

    expect(stringManipulations.findLastMatch("b")).toEqual(output);
    expect(stringManipulations.findLastMatch("B")).toEqual(output);
    expect(stringManipulations.findLastMatch("Z")).toEqual("");
  });

  test("if matches the string between substrings", () => {
    const output = "abb";

    const actual_1 = stringManipulations.substringBetweenMatches("b", "l");
    const actual_2 = stringManipulations.substringBetweenMatches("B", "L");

    expect(actual_1).toEqual(output);
    expect(actual_2).toEqual("");
  });

  test("should return first and last two characters", () => {
    const output = "bale";

    const actual_1 = stringManipulations.both_ends();
    stringManipulations.string = "b"
    const actual_2 = stringManipulations.both_ends();

    expect(actual_1).toEqual(output);
    expect(actual_2).toEqual("");
  });

  test("should return replaced string with asterisk", () => {
    const output = "ba**le";

    const actual_1 = stringManipulations.fix_start(str);
    const actual_2 = stringManipulations.fix_start("");

    expect(actual_1).toEqual(output);
    expect(actual_2).toEqual("");
  });
});
