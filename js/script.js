// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


function getRandomQuote (quotes){
    var newQuote = Math.floor( Math.random() * 6 ) + 1;
    return newQuote;
}

function print(message) {
    var div = document.getElementById('loadQuote').addEventListener("click", printQuote, false);
}


var printQuote = getRandomQuote();




