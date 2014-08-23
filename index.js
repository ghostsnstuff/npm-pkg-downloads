'use strict';

var request = require('request'),
    cheerio = require('cheerio');


module.exports = function npmDownloads(cb) {

  // hello npm •_*
  request('https://www.npmjs.org/', function onRequest(err, res, html) {

      if(err) {
        console.log(err);
      }

      var $ = cheerio.load(html);

      var pkgTotal,
          pkgDay,
          pkgWeek,
          pkgMonth,
          pkgDownloads;

      pkgTotal = Number($('#index p').eq(0).text().split(':')[1].replace(/\s/g, ''));
      pkgDay = Number($('.downloads td').eq(0).text().replace(/\s/g, ''));
      pkgWeek = Number($('.downloads td').eq(2).text().replace(/\s/g, ''));
      pkgMonth = Number($('.downloads td').eq(4).text().replace(/\s/g, ''));

      pkgDownloads = {
        total: pkgTotal,
        day: pkgDay,
        week: pkgWeek,
        month: pkgMonth
      };

      cb(pkgDownloads);
    });

};
