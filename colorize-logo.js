
var fs = require('fs');

var filename = './src/logo/avine-logo.svg';

var content = fs.readFileSync(filename, 'utf8');

content = content.replace(/#FFFFFF/g, '#0277bb');

filename = filename.replace(/\.svg$/, '-blue.svg');

fs.writeFileSync(filename, content, 'utf8');
