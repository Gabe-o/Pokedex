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
    new Pokemon(1,"Bulbasaur","Grass / Poison Type from Gen 1 with a Rarity of 4"),
    new Pokemon(2,"Ivysaur","Grass / Poison Type from Gen 1 with a Rarity of 5"),
    new Pokemon(3,"Venusaur","Grass / Poison Type from Gen 1 with a Rarity of 6"),
    new Pokemon(4,"Charmander","Fire Type from Gen 1 with a Rarity of 4"),
    new Pokemon(5,"Charmeleon","Fire Type from Gen 1 with a Rarity of 5"),
    new Pokemon(6,"Charizard","Fire / Flying Type from Gen 1 with a Rarity of 6"),
    new Pokemon(7,"Squirtle","Water Type from Gen 1 with a Rarity of 4"),
    new Pokemon(8,"Wartortle","Water Type from Gen 1 with a Rarity of 5"),
    new Pokemon(9,"Blastoise","Water Type from Gen 1 with a Rarity of 6"),
    new Pokemon(10,"Caterpie","Bug Type from Gen 1 with a Rarity of 1"),
    new Pokemon(11,"Metapod","Bug Type from Gen 1 with a Rarity of 3"),
    new Pokemon(12,"Butterfree","Bug / Flying Type from Gen 1 with a Rarity of 4"),
    new Pokemon(13,"Weedle","Bug / Poison Type from Gen 1 with a Rarity of 1"),
    new Pokemon(14,"Kakuna","Bug / Poison Type from Gen 1 with a Rarity of 3"),
    new Pokemon(15,"Beedrill","Bug / Poison Type from Gen 1 with a Rarity of 4"),
    new Pokemon(16,"Pidgey","Normal / Flying Type from Gen 1 with a Rarity of 1"),
    new Pokemon(17,"Pidgeotto","Normal / Flying Type from Gen 1 with a Rarity of 3"),
    new Pokemon(18,"Pidgeot","Normal / Flying Type from Gen 1 with a Rarity of 4"),
    new Pokemon(19,"Rattata","Normal Type from Gen 1 with a Rarity of 1"),
    new Pokemon(20,"Raticate","Normal Type from Gen 1 with a Rarity of 4"),
];

//Function for searching pokeArr by ID
function searchByID() {
    //Gets user input
    var input = document.getElementById("idSearch").value;

    //Input Validation
    if(input > 0 && input <= 20) {
        alert("Passed");
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

    //Input Validation
    if(input.length <= 20  && /^[a-zA-Z]/.test(input)) {
        alert("Passed");
    }
    else {
        alert("Enter no more then 20 characters between A-Z or a-z");
    }
}

//Function to search by ID when Enter key is pressed on the input element
function searchByIDName(event) {
    if (event.key === "Enter" ) {
        searchByID();
    }
}