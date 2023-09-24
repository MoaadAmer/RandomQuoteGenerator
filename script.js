
const quotes = {
    "Jules Renard": `“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”`,
    "Albert Einstein": `“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”`,
    "C.S. Lewis": `“I was not born to be free---I was born to adore and obey.”`,
    "John Galsworthy": `“Life calls the tune, we dance.”`
};
let lastIndex = -1;
function generate() {

    let authors = Object.keys(quotes);

    lastIndex = getNextIndex(lastIndex, authors.length);
    console.log(lastIndex);

    let selectedAuthor = authors[lastIndex];

    let selectedQuote = quotes[selectedAuthor];

    document.getElementById("quote").innerText = selectedQuote;
    document.getElementById("author").innerText = selectedAuthor;

}

// this function Insures the next index is different
// from the lastIndex 

function getNextIndex(lastIndex, length) {

    let newIndex = Math.floor(Math.random() * length);
    while (lastIndex == newIndex) {
        newIndex = Math.floor(Math.random() * length);
    }
    return newIndex;
}
