const ArrayManipulations = require('./array');

let arrayM = {};
let objArr = [];
let strArr = [];
let numArr = [];

describe("Array Manipulations class mock", () => {
  beforeEach(() => {
    jest.spyOn(ArrayManipulations.prototype, 
      'sum').mockImplementation(() => 300);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call sum method mock inside avg', () => {
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

  const actual = arrayM.avg();

  expect(arrayM.sum()).toBe(300);
  expect(actual).toBe(50);
  });

});
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

  afterEach(()=> {
    jest.clearAllMocks();
  });

  test("if filters by a search term (link)", () => {
    const output = [{
      id: 3,
      url: "https://www.link3.dev"
    }];

    expect(arrayM.filterByTerm("link")).toEqual(output);

    expect(arrayM.filterByTerm("LINK")).toEqual(output);
  });

  it('should return if value is above the average', ()=>{
    // arrange
    const output = true;

    //act
    const avgFunc = jest.spyOn(arrayM, "avg");
    const actual = arrayM.aboveOrUnderTheAverage(true, 98);

    //assert
    expect(actual).toEqual(output);
    expect(avgFunc).toHaveBeenCalled();
  });
  it('should return the array and not call avg func', ()=>{
    // arrange
    const output = [45, 67, 98, 45, 34, 22];

    //act
    const avgFunc = jest.spyOn(arrayM, "avg");
    const actual = arrayM.aboveOrUnderTheAverage(false, 98);

    //assert
    expect(actual).toEqual(output);
    expect(avgFunc).not.toHaveBeenCalled();
  });
  it('should return the longest word in the string array', ()=>{
    // arrange
    const output = 'another bigger word';

    //act
    const actual = arrayM.findLongestWord();

    //assert
    expect(actual).toEqual(output);
    expect(strArr).toContain(output);
  });
});
