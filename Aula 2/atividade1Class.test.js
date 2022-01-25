const StringManipulations = require('./atividade1');
const AdressMatcher = require('./atividade1ClassConsumer'); 

const mockFilterByTerm = jest.fn();

jest.mock('./atividade1', () => {
    return jest.fn().mockImplementation(() => {
        return { findFirstMatch : () => {
            return {
                street: 'Las Vegas Strip'
              };
        }}
    });
});
  
describe("ClassConsumer class test", () => {
    beforeEach(() => {
      StringManipulations.mockClear();
        mockFilterByTerm.mockClear();
    });

    it('should call the StringManipulations instance in the constructor of Street class', () => {
        const street = new AdressMatcher();
        expect(StringManipulations).toHaveBeenCalledTimes(1);
    });

    it('should instantiate the StringManipulations and return the mock value', () => {
      const end = ('Las Vegas Strip')  
      const street = new AdressMatcher(end);

        const actual = street.findStreetName('Las Vegas Strip');

        expect(actual).toEqual('Las');
    });

});

describe("ClassConsumer class test", () => {
  beforeEach(() => {
    StringManipulations.mockClear();
      mockFilterByTerm.mockClear();
  });

  it('should call the StringManipulations instance in the constructor of Street class', () => {
      const street = new AdressMatcher();
      expect(StringManipulations).toHaveBeenCalledTimes(1);
  });

  it('should instantiate the StringManipulations and return the mock value', () => {
    const end = ('Las Vegas Strip')  
    const street = new AdressMatcher(end);

      const actual = street.hideStreetName('Las Vegas Strip');

      expect(actual).toEqual('Las');
  });

});
