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
    var indexData = {
    };

    //printing and setting Dow Jones data
    console.log($('div.bld a').eq(0).text() + ": " + $('#ref_983582_l').text() + " " + $('#ref_983582_c').text() + " " + $('#ref_983582_cp').text());

    indexData.dow = $('div.bld a').eq(0).text() + ": " + $('#ref_983582_l').text() + " " + $('#ref_983582_c').text() + " " + $('#ref_983582_cp').text();

    //printing and setting S&P data
    console.log($('div.bld a').eq(1).text() + ": " + $('#ref_626307_l').text() + " " + $('#ref_626307_c').text() + " " + $('#ref_626307_cp').text());

    indexData.sp = $('div.bld a').eq(1).text() + ": " + $('#ref_626307_l').text() + " " + $('#ref_626307_c').text() + " " + $('#ref_626307_cp').text();

    //printing and setting NASDAQ
    console.log($('div.bld a').eq(2).text() + ": " + $('#ref_13756934_l').text() + " " + $('#ref_13756934_c').text() + " " + $('#ref_13756934_cp').text());

    indexData.nasdaq = $('div.bld a').eq(2).text() + ": " + $('#ref_13756934_l').text() + " " + $('#ref_13756934_c').text() + " " + $('#ref_13756934_cp').text();

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
