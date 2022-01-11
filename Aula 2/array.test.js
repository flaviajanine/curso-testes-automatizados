const ArrayManipulations = require('./array');

let arrayM = {};
let objArr = [];
let strArr = [];
let numArr = [];

describe("Array Manipulations class", () => {

  beforeAll(() => {
    objArr = [{
        id: 1,
        url: "https://www.url1.dev"
      },
      {
        id: 2,
        url: "https://www.url2.dev"
      },
      {
        id: 3,
        url: "https://www.link3.dev"
      }
    ];
    numArr = [45, 67, 98, 45, 34, 22];
    strArr = ['one word', 'second word', 'another bigger word'];
    arrayM = new ArrayManipulations(objArr, numArr, strArr);
  });

  test("if filters by a search term (link)", () => {
    const output = [{
      id: 3,
      url: "https://www.link3.dev"
    }];

    expect(arrayM.filterByTerm("link")).toEqual(output);

    expect(arrayM.filterByTerm("LINK")).toEqual(output);
  });
});
