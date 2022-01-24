const StringManipulations = require('./atividade1');

let string = {};
const mockFilterByTerm = jest.fn();

jest.mock('./array', () => {
  return jest.fn().mockImplementation(() => {
      return { filterByTerm : () => {
          return {
              id: 1,
              url: "front-end"
            };
      }}
  });
});

describe("String Manipulations class mock", () => {
  beforeEach(() => {
    StringManipulations.mockClear();
    mockFilterByTerm.mockClear();
  });

  it('should call StringManipulations', () => {
  
  string = 'Não sei oque escrever por enquanto';

  });

});
