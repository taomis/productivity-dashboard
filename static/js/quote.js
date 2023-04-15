const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

$(function() {
    const quote = $('.quotation');
    getQuote(quote);
    $('#getQuote').click(function(event) {
        event.preventDefault();
        getQuote(quote);
    });
});

function getQuote(quote) {
    $.getJSON(url, function(data) {
        quote.html(data.quoteText + '<br>- ' + data.quoteAuthor);
    });
}
