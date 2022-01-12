const Circle = require("./circle");

let circle = {};

describe('Circle class test 3', () => {
    beforeAll(() => {
        circle = new Circle(3);
    });
    test('if circle circumference returns correctly 19', () => {
        expect(circle.circleCircumference()).toBe(19);
    });
    it('should return circle circumference as 19', () => {
        expect(circle.circleCircumference()).toBe(19);
    });
    test('if radius is a number', () => {
        expect(circle.radius).toEqual(expect.any(Number));
    });
});
describe('Circle class test', () => {
    beforeAll(() => {
        circle = new Circle(4);
    });
    test('if circle circumference returns correctly', () => {
        expect(circle.circleCircumference()).toBe(25);
    });
    it('should return circle circumference', () => {
        expect(circle.circleCircumference()).toBe(25);
    });
    test('if radius is a number', () => {
        expect(circle.radius).toEqual(expect.any(Number));
    });
    it('should return circle area', () => {
        expect(circle.circleArea()).toBe(50);
    });
});