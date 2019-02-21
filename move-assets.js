var ncp = require('ncp').ncp;

var srcPath = 'static';
var destPath = 'build/static';

console.log('Copying files...');
ncp(srcPath, destPath, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Copying files complete.');
});