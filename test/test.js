'use strict';

var npmDownloads = require('../index'),
    test = require('tape');


test('npm-pkg-downloads', function(t) {

  t.plan(6);

  npmDownloads(function(downloads) {

    t.equal(typeof downloads, 'object');
    t.equal(Object.keys(downloads).length, 4);
    t.equal(typeof downloads['total'], 'number');
    t.equal(typeof downloads['day'], 'number');
    t.equal(typeof downloads['week'], 'number');
    t.equal(typeof downloads['month'], 'number');
    t.end();

  });

});
