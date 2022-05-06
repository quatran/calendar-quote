function getRandomElementfromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
const backgroundColors = [
    "#9B5DE5", //purple
    "#F15BB5", //margenta
    "#00BBF9", //blue
    "#FF006E", //red
    "#52B69A" //green
];

const beginning = [
    "According to studies you should",
    "Anyone can",
    "As an average human you should",
    "At your age you should",
    "Everyone should",
    "I think you should",
    "It might not be a bad idea to",
    "It would be great if you could",
    "Like anyone else you should",
    "People like you should",
    "Under some circumstance you must",
    "You are allowed to",
    "Your inner child wants you to",
    "Your subconciousness wants you to",
    "Your mum would be glad to see you",
    "Seize your moment and"
]

const action = [
    "bake a cake",
    "build a sand castle",
    "call a friend",
    "cook",
    "dance",
    "do yoga",
    "go to the cinema",
    "meditate",
    "paint a picture",
    "pick up trash",
    "play video games",
    "relax",
    "sing a folk song",
    "sleep",
    "take a nap",
    "take your time",
    "visit the zoo",
    "watch a movie",
    "write a love poem",
    "be kind to a stranger",
    "complement someone's achievement"
]
const adverb = [
    "calmly",
    "carefully",
    "deliberately",
    "gently",
    "ocassionally",
    "seriously",
    "smoothly",
    "without any doubts",
    "the best way you can",
    "in all honesty",
    "",
    "",
    "",
    "",
    "",
    "",
]


const end = [
    "24/7",
    "anytime",
    "at sunrise",
    "at the train station",
    "at work",
    "at your birthday",
    "five times a week",
    "in the furniture store",
    "in the church",
    "in the moonlight",
    "in the rain",
    "next week",
    "now",
    "on mondays",
    "outside",
    "tomorrow"
];

function getRandomQuote() {
    var quote = getRandomElementfromArray(beginning) + ' '
        + getRandomElementfromArray(action) + ' '
        + getRandomElementfromArray(adverb) + ' '
        + getRandomElementfromArray(end) + ".";
    return quote;
}

document.body.style.background = getRandomElementfromArray(backgroundColors);

document.querySelector("#quote").innerHTML = getRandomQuote();
