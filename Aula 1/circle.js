class Circle {

    /**
     * Creates a circle object given a radius number
     * @param  {Number} radius  Size of the radius.
     */
    constructor(radius) {
        this.radius = radius;
        this.diameter = radius * 2;
    }

    /**
     * Returns the circumference of the circle object
     * @return {Number} 
     */
    circleCircumference() {
        const circumferenceOfCircle = 2 * Math.PI * this.radius;
        return Math.round(circumferenceOfCircle);
    }

    /**
     * Returns the Area of the circle
     * @return {Number}   
     */
    circleArea() {
        const areaOfCircle = Math.PI * this.radius * this.radius;
        return Math.round(areaOfCircle);
    }
}

module.exports = Circle;