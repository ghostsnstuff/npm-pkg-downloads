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

Output

```javascript
{ total: 90525, day: 16299502, week: 99896225, month: 413985488 }
```

### installation
```
npm install npm-pkg-downloads
```

### test
```
npm test
```
