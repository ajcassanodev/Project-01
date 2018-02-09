//array of objects 
var quotes = [
    {quote: 'you miss 100 percent of the shots you dont take.', source: 'Wayne Gretzky'},
    {quote: 'To be the man, you must beat the man.', source: 'Ric Flair'},
    {quote: 'Without self-discipline, success is impossible, period.', source: 'Lou Holtz'},
    {quote: 'It is not the size of a man but the size of his heart that matters', source: 'Evander Holyfield'},
    {quote: 'Winners never quit and quitters never win.', source: 'Vince Lombardi'}
];
//this selects a random quote and source based on length of array; it returns the value back. 
function getRandomQuote () {
    var randomQuote = Math.floor( Math.random() * quotes.length);
    return quotes[randomQuote]; 
}
//this function calls getRandomQuote function  of getRandomQuote; the values are stored into the quoteb var.   
function printQuote () {
    var printq  = getRandomQuote() ;
    var quoteb  = '<p class="quote">' + printq.quote + '</p>' + '<p class="source">' + printq.source + '</p>';  
    document.getElementById('quote-box').innerHTML = quoteb ;
    
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

