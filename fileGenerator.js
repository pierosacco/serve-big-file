'use strict';

let fs = require('fs');
let file = fs.createWriteStream('./data/big.file');
for(let i = 0; i <= 1e6; ++i) {
  file.write('Lorem ipsum dolor sit amet, consectetur adispisicing elit, sed, do eiusmod tempor ' +
  'incidiunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
  'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
  'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
  'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}
file.end();