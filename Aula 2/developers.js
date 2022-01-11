const ArrayManipulations = require('./array');

class Developers {
    /**
     * Class for creating developer objects
     * @param  {Array} skills  input array of objects
     * @param  {Array} names input array of strings
     * @param  {Array} ages input array of numbers
     */
     constructor(skills, names, ages) {
        this.skills = skills;
        this.names = names;
        this.ages = ages;

        this.arrayM = new ArrayManipulations(skills, names, ages);
     }

     /**
     * Searches for a developer skill in the array given 
     * @param  {string} skill  input skill
     * @return the object that contains the skill searched for
     */
     findSkill(skill){
         return this.arrayM.filterByTerm(skill);
     }
}

module.exports = Developers;