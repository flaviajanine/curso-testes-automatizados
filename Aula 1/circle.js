
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.diameter = radius*2;
    }
    circleCircumference() {
        const circumferenceOfCircle = 2 * Math.PI * this.radius;
        return circumferenceOfCircle;
    }

    circleArea() {
        return Math.PI * this.radius * this.radius;
    }
}

module.exports = Circle;