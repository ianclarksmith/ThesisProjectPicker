var architecture =
    [ "house"
    , "apartment"
    , "mansion"
    , "library"
    , "museum"
    , "school"
    , "café"
    , "restaurant"
    , "cabin"
    , "shed"
    , "shelter"
    , "hospital"
    , "shopping center"
    , "church"
    , "chapel"
    , "public park"
    , "communal living area"
    , "farm"
    , "reclaimed lot"
    , "monument"
    , "memorial"
    , "social space"
    , "forum"
    , "platform"
    , "pavilion"
    , "transit hub"
    , "island"
    ];

var clients =
    [ "child"
    , "poet"
    , "fisherman"
    , "hunter"
    , "writer"
    , "musician"
    , "architect"
    , "engineer"
    , "mechanic"
    , "lawyer"
    , "painter"
    , "artist"
    , "filmmaker"
    , "photographer"
    , "mason"
    , "carpenter"
    , "student"
    , "firefighter"
    , "astronaut"
    , "pilot"
    , "soldier"
    , "veteran"
    , "politician"
    , "actor"
    , "actress"
    , "athlete"
    , "clergyman"
    , "monk"
    , "inventor"
    , "scientist"
    , "surgeon"
    , "doctor"
    , "laborer"
    , "shop owner"
    , "professor"
    , "philosopher"
    , "genius"
    , "autodidact"
    , "husband and wife"
    ];

var dispositions =
    [ "blind"
    , "deaf"
    , "poor"
    , "disabled"
    , "handicapped"
    , "reclusive"
    , "contemplative"
    , "displaced"
    , "exiled"
    , "forgotten"
    , "forgetful"
    , "honest"
    , "dishonest"
    , "native"
    , "imprisoned"
    , "unknown"
    , "anonymous"
    , "apathetic"
    , "impassioned"
    , "widowed"
    , "ill"
    , "terminally ill"
    , "vegetarian"
    ];

// could be categorized... material, social, environmental...
var programs =
    [ "which runs on solar energy"
    , "which filters local smog"
    , "which rests on the edge of a cliff"
    , "in commemoration of a great event"
    , "which floats above the city"
    , "inhabiting another planet"
    , "at the crest of a hill"
    , "atop a moving foundation"
    , "which reacts to the seasons"
    , "reveals new tectonics"
    , "between East and West"
    , "between two cities"
    , "to disrupt the surrounding landscape"
    , "which reflects changing values"
    , "with no doors"
    , "composed of a single continuous surface"
    , "which decays over the lifespan of its occupant"
    , "which grows autonomously"
    , "which can be fit into a briefcase"
    , "on a piece of paper"
    , "in the sky"
    , "by the ocean"
    , "where salt meets soil"
    , "on the edge of the horizon"
    , "which adheres to its neighbors"
    , "which subverts the vernacular landscape"
    , "which doesn't leak"

    // poorly phrased
    , "which divides us"
    , "which unites us"
    ];

var tryAgain =
    [ "Try again..."
    , "Too cliché."
    , "Incoherent."
    , "Overly derivative."
    , "Not intellectually stimulating."
    , "Idea lacks rigor."
    , "I don't see where you're going with this."
    , "Better to start from scratch."
    , "How would you even critique this?"
    ];

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
};

function randomBoolean() {
    return Math.random() < .5;
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function constructSentence() {
    function articleForNoun(noun) {
        var article = noun.charAt(0).match(/[aeiouAEIOU]/) ? "an" : "a";
        return article + " " + noun;
    };

    var building = randomElement(architecture);
    var client = randomElement(clients);
    var program = randomElement(programs);

    // if (randomBoolean()) {
    //     building = randomElement(structures) + " " + randomElement(architecture);
    // };

    if (randomBoolean()) {
        client = randomElement(dispositions) + " " + client;
    };

    return capitalizeFirstLetter(articleForNoun(building))
         + " for " + articleForNoun(client) + " " + program + ".";
};

(function reset() {
    var element = document.querySelector("#idea");
    var idea = constructSentence();
    element.innerHTML = idea;

    var refresh = document.querySelector("#refresh");
    refresh.innerHTML = randomElement(tryAgain);
})();