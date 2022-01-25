const StringManipulations = require("./atividade1");

let string = {};

describe("First String Manipulation class mock", () => {
  beforeEach(() => {
    first = new StringManipulations(string);
  });

  it("should initiate the StringManipulations and return the mock value", () => {
    string = new StringManipulations(string);
    const actual = string.findFirstMatch("Antonio Oliveira Silva");

    expect(actual).toEqual("Antonio");
  });
});

describe("Last String Manipulation class mock", () => {
  beforeEach(() => {
    last = new StringManipulations(string);
  });

  it("should initiate the StringManipulations and return the mock value", () => {
    string = new StringManipulations(string);
    const actual = string.findLastMatch("Antonio Oliveira Silva");

    expect(actual).toEqual("Silva");
  });
});
