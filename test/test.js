'use strict';

var npmDownloads = require('../index');

npmDownloads(function(downloads) {
  console.log(downloads);
});
