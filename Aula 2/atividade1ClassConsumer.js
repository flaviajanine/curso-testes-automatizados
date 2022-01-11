const StringManipulations = require('./atividade1');

class AdressMatcher {
    /**
     * Class for creating adress and manipulating objects
     * @param  {string} adressText  string containing the address
     */
     constructor(adressText) {
        this.adressText = adressText;

        this.stringM = new StringManipulations(adressText);
     }

     /**
     * Searches for the street name in the given address
     * @param  {string} streetName to be found in the address
     * @return street name if found in address string
     */
     findStreetName(streetName){
         return this.stringM.findFirstMatch(streetName);
     }

     /**
     * Hides the street name for security
     * @param  {string} streetName to be hidden in the address
     * @return the modified address
     */
      hideStreetName(streetName){
        return this.stringM.fix_start(streetName);
    }
}

module.exports = AdressMatcher;