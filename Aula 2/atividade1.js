class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string.toLowerCase();
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {

        const fSubStr = this.string.indexOf(subStr.toLowerCase())
        const lSubStr = this.string.indexOf(fSubStr, fSubStr + subStr.length)
        // 6, 11
        const matchStr = this.string.substring(fSubStr, fSubStr + subStr.length)

        return matchStr
    }


    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        const fSubStr = this.string.indexOf(subStr.toLowerCase())
        const lSubStr = this.string.indexOf(fSubStr, fSubStr + subStr.length)

        const matchStr = this.string.substring(fSubStr, fSubStr + subStr.length)

        return matchStr
    }

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        
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

    }

    /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {}

}

module.exports = StringManipulations;