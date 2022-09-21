// Class for holding the information associated with a pokemon
class Pokemon {
    constructor(id, name, desc) {
        this.id = id;
        this.name = name;
        this.desc = desc;
    }

    // This will be used to display the infomation after a search is complete
    toString() {
        return this.name + " (#" + this.id + ") \t" +this.desc;
    }
}

// Declared all Pokemon
var pokeArr = [
    new Pokemon("001","Bulbasaur","Grass / Poison Type from Gen 1 with a Rarity of 4"),
    new Pokemon("002","Ivysaur","Grass / Poison Type from Gen 1 with a Rarity of 5"),
    new Pokemon("003","Venusaur","Grass / Poison Type from Gen 1 with a Rarity of 6"),
    new Pokemon("004","Charmander","Fire Type from Gen 1 with a Rarity of 4"),
    new Pokemon("005","Charmeleon","Fire Type from Gen 1 with a Rarity of 5"),
    new Pokemon("006","Charizard","Fire / Flying Type from Gen 1 with a Rarity of 6"),
    new Pokemon("007","Squirtle","Water Type from Gen 1 with a Rarity of 4"),
    new Pokemon("008","Wartortle","Water Type from Gen 1 with a Rarity of 5"),
    new Pokemon("009","Blastoise","Water Type from Gen 1 with a Rarity of 6"),
    new Pokemon("010","Caterpie","Bug Type from Gen 1 with a Rarity of 1"),
    new Pokemon("011","Metapod","Bug Type from Gen 1 with a Rarity of 3"),
    new Pokemon("012","Butterfree","Bug / Flying Type from Gen 1 with a Rarity of 4"),
    new Pokemon("013","Weedle","Bug / Poison Type from Gen 1 with a Rarity of 1"),
    new Pokemon("014","Kakuna","Bug / Poison Type from Gen 1 with a Rarity of 3"),
    new Pokemon("015","Beedrill","Bug / Poison Type from Gen 1 with a Rarity of 4"),
    new Pokemon("016","Pidgey","Normal / Flying Type from Gen 1 with a Rarity of 1"),
    new Pokemon("017","Pidgeotto","Normal / Flying Type from Gen 1 with a Rarity of 3"),
    new Pokemon("018","Pidgeot","Normal / Flying Type from Gen 1 with a Rarity of 4"),
    new Pokemon("019","Rattata","Normal Type from Gen 1 with a Rarity of 1"),
    new Pokemon("020","Raticate","Normal Type from Gen 1 with a Rarity of 4"),
];

//Function for searching pokeArr by ID
function searchByID() {
    //Gets user input
    var input = document.getElementById("idSearch").value;

    //Input Validation by parseing string input to integer to account for inputs that include leading zeros
    if(parseInt(input.toString()) > 0 && parseInt(input.toString()) <= 20) {

        //Finds the first 5 results that include the input
        var resultsString = "Results: \n";
        var resultsFound = 0;
        for(var i = 0; i < pokeArr.length && resultsFound < 5; i++) {
            
            if(pokeArr[i].id.toString().includes(input.toString())) {
                resultsString += pokeArr[i].toString()+"\n"; // appending found result to the string
                resultsFound++;
            }
        }

        alert(resultsString);
    }
    else {
        alert("Enter and ID between 1 and 20");
    }
}

//Function to search by ID when Enter key is pressed on the input element
function searchByIDEnter(event) {
    if (event.key === "Enter" ) {
        searchByID();
    }
}

//Function for searching pokeArr by Name
function searchByName() {
    //Gets user input
    var input = document.getElementById("nameSearch").value;

    //Input Validation by checking if the input is less then or equal to 20 characters and only uses the characters a-z or A-Z
    if(input.length <= 20  && /^[a-zA-Z]/.test(input)) {

        //Finds the first 5 results that include the input
        var resultsString = "Results: \n";
        var resultsFound = 0;
        for(var i = 0; i < pokeArr.length && resultsFound < 5; i++) {
            
            if(pokeArr[i].name.toLowerCase().includes(input.toLowerCase())) {
                resultsString += pokeArr[i].toString()+"\n"; // appending found result to the string
                resultsFound++;
            }
        }

        alert(resultsString);
    }
    else {
        alert("Enter no more then 20 characters between A-Z or a-z");
    }
}

//Function to search by name when Enter key is pressed on the input element
function searchByNameEnter(event) {
    if (event.key === "Enter" ) {
        searchByName();
    }
}