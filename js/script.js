

//function that returns and array index and the quote from that index.
    function getRandomQuote() {
        let index = Math.floor(Math.random() * quotes.length );
        return quotes[index];
    }

//function that prints the quote provided by the random quote generator function.
    function printQuote() {
        let quoteBlock = getRandomQuote();
        let html = '';
        html += '<p class="quote">' + quoteBlock.quote + '</p>';

        // if source is defined it will be displayed, if it's undefined the source will display: 'unknown'
        if (quoteBlock.source !== undefined) {
            html += '<p class="source">' + quoteBlock.source;
        } else if (quoteBlock.source === undefined) {
            html += '<p class="source">' + 'Unknown';
        }

        // if citation is defined it will be displayed.
        if (quoteBlock.citation !== undefined) {
            html += '<span class="citation">' + quoteBlock.citation + '</span>';
        }

        // if the quote has a year it will be displayed.
        if (quoteBlock.year !== undefined) {
            html += '<span class="year">' + quoteBlock.year + '</span>';
        }

        html += '</p>';

        // Loads HTML string to web page.
        document.getElementById('quote-box').innerHTML = html;
    }



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("loadQuote").addEventListener("click", function() { printQuote();
        }, false);
    });









