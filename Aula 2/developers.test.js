const Developers = require('./Developers');
const ArrayManipulations = require('./array'); 

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
  
describe("Developers class test", () => {
    beforeEach(() => {
        ArrayManipulations.mockClear();
        mockFilterByTerm.mockClear();
    });

    it('should call the ArrayManipulations instance in the constructor of Developers class', () => {
        const developer = new Developers();
        expect(ArrayManipulations).toHaveBeenCalledTimes(1);
    });

    it('should instantiate the ArrayManipulations and return the mock value', () => {
        const skills = [{
            id: 1,
            url: "front-end"
          },
          {
            id: 2,
            url: "back-end"
          },
          {
            id: 3,
            url: "cloud"
          }
        ];
        const ages = [45, 67, 98, 45, 34, 22];
        const names = ['one word', 'second word', 'another bigger word'];
        const developer = new Developers(skills, names, ages);

        const actual = developer.findSkill('front-end');

        expect(actual).toEqual({
            id: 1,
            url: "front-end"
          });
    });

});
