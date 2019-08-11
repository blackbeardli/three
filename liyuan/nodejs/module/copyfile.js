'use stirck';
var fs  = require('fs');
 var rs = fs.createReadStream('sa.txt');
 var ws = fs.createWriteStream('ssa.txt');
 rs.pipe(ws);
 console.log('end');