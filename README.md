## npm-pkg-downloads

Crawls npm to fetch the number of total, daily, weekly, and monthly packages.

### Usage
```javascript
'use strict';

var npmDownloads = require('npm-pkg-downloads');

npmDownloads(function(downloads) {
  console.log(downloads);
});
```

### installation
```
npm install npm-pkg-downloads
```

### test
```
npm test
```
