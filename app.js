const request = require('request');
//cheerio parses html markups and implement JQuery to select DOM elements
const cheerio = require('cheerio');

//request function to get explainxkcd html data
function gfinance(url) {
  request(url, function(error, response, body){
    if (error) {
      console.log('error: ' + error);
    }
    //load the html DOM to cheerio
    const $ = cheerio.load(body);
    const IndexData = function(name, number, change, percent) {
      this.name = name;
      this.number = number;
      this.change = change;
      this.percent = percent;
    };
    console.log($('title').text());

    //printing and setting Dow Jones data
    var dowJones = new IndexData($('div.bld a').eq(0).text(), $('#ref_983582_l').text(), $('#ref_983582_c').text(), $('#ref_983582_cp').text());

    console.log(dowJones.name + ": " + dowJones.number + dowJones.change + dowJones.percent);

    //printing and setting S&P data

    var sp500 = new IndexData($('div.bld a').eq(1).text(), $('#ref_626307_l').text(), $('#ref_626307_c').text(), $('#ref_626307_cp').text());

    console.log(sp500.name + ": " + sp500.number + sp500.change + sp500.percent);

    //printing and setting NASDAQ
    var nasdaq = new IndexData($('div.bld a').eq(2).text(), $('#ref_13756934_l').text(), $('#ref_13756934_c').text(), $('#ref_13756934_cp').text());

    console.log(nasdaq.name + ": " + nasdaq.number + nasdaq.change + nasdaq.percent);

    //compile the <p> tag text in the html
    // $('#Explanation').parent().nextAll('p').each( function() {
    //   data += $(this).text() + '\n';
    //   if ($(this).next().prop('tagName') === 'H2') {
    //     return false;
    //   }
    // });
  });
}

//call the gfinance function
gfinance('https://www.google.com/finance');
