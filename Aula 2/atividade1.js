class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        // [1] Confirm if the implementation is correct. The proposal wasn't clear.
        const regex = new RegExp(subStr, "i");
        const matched = this.string.match(regex);
        if (matched) {
            return matched[0];
        } else {
            return "";
        }
    }


    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        // [2] Confirm if the implementation is correct. The proposal wasn't clear.
        let inverted = this.string.split("").reverse().join("");
        const regex = new RegExp(subStr, "i");
        const matched = inverted.match(regex);
        if (matched) {
            return matched[0];
        } else {
            return "";
        }
    }

    /**
     * Returns the substring between two given other strings
     * @param  {String} subStr1  beginning of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        const matched = this.string.match(`${subStr1}(.*)${subStr2}`);
        if (matched) {
            return matched[1]
        } else {
            return "";
        }
    }

    /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        const stringSize = this.string.length;
        if (stringSize > 1) {
            const beginning = this.string.substring(stringSize - 2);
            const end = this.string.substring(0, 2);
            return end.concat(beginning);
        } else {
            return "";
        }
    }

    /**
    Given a string, return a string
    where all occurrences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {
        const firstChar = str1.substring(0, 1);
        // const replaced = subStr1.slice(1).replaceAll(firstChar, "*"); // Better solution, but Jest does not recognize because is a new feature: https://pt.stackoverflow.com/questions/513297/typeerror-replaceall-is-not-a-function
        const replaced = str1.slice(1).split(firstChar).join("*");
        return firstChar.concat(replaced);
    }
}

module.exports = StringManipulations;