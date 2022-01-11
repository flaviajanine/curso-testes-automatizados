class ArrayManipulations {
    /**
     * Class for manipulating array objects
     * @param  {Array} inputObjectArr  input array of objects
     * @param  {Array} inputStringArray input array of strings
     * @param  {Array} inputNumbersArray input array of numbers
     */
    constructor(inputObjectArr, inputNumbersArray, inputStringArray) {
        this.inputObjectArr = inputObjectArr;
        this.inputStringArray = inputStringArray;
        this.inputNumbersArray = inputNumbersArray;
    }

    /**
     * Searches for an item in the array given a search item
     * @param  {string} searchTerm  input search item
     * @return the object that contains the item searched for
     */
    filterByTerm(searchTerm) {
        const regex = new RegExp(searchTerm, "i");
        return this.inputObjectArr.filter(arrayElement => {
            return arrayElement.url.match(regex);
        });
    }

    /**
     * Given a boolean param call or not avg() to make the array average
     * @param {boolean} above wether is suppose to check for above or not
     * @return if there is a value above the average when above = true or 
     * the numbers array if not
     */
    aboveOrUnderTheAverage(above, givenVal) {
        if (above)
            return this.inputNumbersArray.some(value => {
                return (value === givenVal) && value > this.avg();
            });
        if (!above)
            return this.inputNumbersArray;
    }

    /**
     * Finds the longest word in the given array
     * @return the longest word in the array
     */
    findLongestWord() {
        let lgth = 0;
        let longest;
        for (var i = 0; i < this.inputStringArray.length; i++) {
            if (this.inputStringArray[i].length > lgth) {
                lgth = this.inputStringArray[i].length;
                longest = this.inputStringArray[i];
            }
        }
        return longest;
    }

    /**
     * Makes the sum of all of the numbers in the given array
     * @return the sum of all numbers in the array
     */
    sum() {
        let sum = 0;
        for (let i = 0; i < this.inputNumbersArray.length; i++) {
            sum += this.inputNumbersArray[i];
        }
        return sum;
    }
    /**
     * Calculates the average of the array of numbers
     * @return the average number
     */
    avg() {
        return this.sum() / this.inputNumbersArray.length;
    }

    /**
     * Joins all strings of the array into one
     * @return the result string
     */
     uniqueArray() {
        return this.inputStringArray.join(',');
    }


}

module.exports = ArrayManipulations;