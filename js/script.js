var quotes [
    {quote: 'you miss 100 perscent of the shotes you dont take.', source: 'Wayne Gretzky'},
    {quote: 'To be the man, you must beat the man.', source: 'Ric Flair'},
    {quote: 'Without self-discipline, success is impossible, period.', source: 'Lou Holtz'},
    {quote: 'It is not the size of a man but the size of his heart that matters', source: 'Evander Holyfield'},
    {quote: 'Winners never quit and quitters never win.', source: 'Vince Lombardi'}
];

function getRandomQuote () {
    var randomQuote = math.floor( Math.random() * quotes.length) +1;
    return randomQuote; 
}

function PrintQuote () {
    var printq = getRandomQuote(quotes.quote(source));
    

}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

