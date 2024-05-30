// This function will randomize male names
function buttonNPCMaleNames() {

    var myarraynpcMalenames = new Array(
        "Aeldrin", "Aeron", "Aethrin", "Aidan", "Alastair", "Aldric", "Aleron", "Alvar", "Ambrosius", "Ancel",
        "Andras", "Andred", "Ansel", "Ansgar", "Archibald", "Ardal", "Ardan", "Arlen", "Armand", "Arminius",
        "Arnaud", "Arnulf", "Artorius", "Asbjorn", "Asger", "Astolf", "Athelred", "Auberon", "Audric", "Aurelian",
        "Auric", "Avery", "Baldric", "Balthazar", "Barclay", "Barden", "Barius", "Beau", "Beldrin", "Beren",
        "Bertrand", "Bohemond", "Braden", "Bram", "Brycen", "Cadogan", "Caedmon", "Caius", "Calhoun", "Caspian",
        "Cedric", "Cerdic", "Chadwick", "Cináed", "Clovis", "Colbert", "Colwyn", "Corbin", "Corin", "Cormac",
        "Cornelius", "Cullen", "Damien", "Darian", "Darren", "Davan", "Decius", "Demetrius", "Denzel", "Derrick",
        "Desmond", "Diarmuid", "Dominic", "Donovan", "Drystan", "Duncan", "Dunstan", "Eadric", "Eamon", "Edan",
        "Edric", "Edwyn", "Eldred", "Elias", "Elijah", "Emeric", "Emrys", "Eogan", "Eran", "Erland", "Erwin",
        "Ethan", "Evander", "Evelyn", "Fabian", "Fallon", "Faran", "Fausto", "Fendrel", "Fergus", "Finian",
        "Florian", "Folke", "Fynn", "Gaheris", "Galen", "Galeron", "Gareth", "Garrick", "Gawain", "Gawen",
        "Geffrey", "Gellert", "Geoffroi", "Gerard", "Gideon", "Gilbert", "Godric", "Godfrey", "Grady", "Griffith",
        "Gunnar", "Guthrie", "Hadrian", "Haldor", "Hamish", "Hannibal", "Harding", "Harlan", "Harrington", "Hartley",
        "Hayden", "Hector", "Hedwig", "Helios", "Henrick", "Heron", "Horatio", "Hubert", "Hugo", "Humphrey",
        "Ignatius", "Ingram", "Inigo", "Iorwerth", "Irvin", "Isadore", "Isidore", "Ivo", "Jace", "Jaden",
        "Jared", "Jasper", "Jaxon", "Jebediah", "Jericho", "Joachim", "Jochen", "Joffrey", "Jonah", "Joscelin",
        "Julian", "Jurian", "Justinian", "Kade", "Kai", "Kale", "Kallen", "Kameron", "Keegan", "Kendrick",
        "Kenelm", "Kenrick", "Kenton", "Kieran", "Killian", "Kiran", "Kylan", "Lachlan", "Lancelot", "Landon",
        "Larkin", "Laszlo", "Leander", "Leif", "Leland", "Leonidas", "Levi", "Liam", "Lionel", "Lochlann",
        "Loric", "Loren", "Lorenz", "Lucian", "Lucius", "Ludovic", "Luthias", "Lyle", "Maddox", "Magnus",
        "Malachi", "Malcolm", "Marius", "Marrok", "Martyn", "Mateo", "Matthias", "Mauger", "Maximilian", "Merick",
        "Merrick", "Milo", "Mordred", "Morgan", "Myles", "Nathaniel", "Neville", "Niall", "Nicodemus", "Nigel",
        "Nolan", "Norbert", "Octavian", "Odran", "Oisín", "Orion", "Orson", "Osbert", "Osmund", "Oswald",
        "Otho", "Owen", "Pádraig", "Parnell", "Peregrine", "Percival", "Peyton", "Phineas", "Quentin", "Quincy",
        "Radcliffe", "Radulf", "Rafe", "Raimond", "Raleigh", "Ramsey", "Randall", "Randolph", "Raoul", "Raven",
        "Rayner", "Redmond", "Reginald", "Remy", "Reynard", "Rhys", "Ricard", "Rickard", "Riordan", "Roald",
        "Roarke", "Robart", "Roben", "Rodin", "Rodney", "Rogar", "Roland", "Rolfe", "Rolf", "Roran",
        "Rory", "Rowan", "Rowland", "Rufus", "Rupert", "Rylan", "Sabin", "Sander", "Sébastien", "Seraphim",
        "Severin", "Seymour", "Silas", "Simeon", "Simon", "Siward", "Soren", "Stellan", "Sven", "Sylvester",
        "Tadhg", "Tancred", "Taran", "Tate", "Teagan", "Terence", "Thaddeus", "Theron", "Thorvald", "Thurgood",
        "Tiberius", "Tiernan", "Tobias", "Tristan", "Trygve", "Ulric", "Ulysses", "Urien", "Uriah", "Valerian",
        "Vance", "Vaughn", "Veron", "Vespasian", "Vidar", "Viggo", "Vincenz", "Virgil", "Walden", "Wallis",
        "Warden", "Warrick", "Wendell", "Weston", "Whitaker", "Wilbur", "Wilfred", "Wilhem", "Wilkins", "Willas",
        "Wulfric", "Wyatt", "Wymond", "Xavier", "Xavius", "Yves", "Zaccheus", "Zane", "Zephyr", "Zoltan"
    );

    var random = myarraynpcMalenames[Math.floor(Math.random() * myarraynpcMalenames.length)];

    document.getElementById("buttonNPCMaleNames").innerHTML = random;
}
;
