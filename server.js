var http = require('http');

require('async');
require('azure');
require('dpush');
require('mpns');
require('oauth');
require('pusher');
require('request');
require('sax');
require('sendgrid');
require('twilio');
require('underscore');
require('underscore.string');
require('wns');
require('xml2js');
require('xmlbuilder');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');
    
}).listen(process.env.PORT || 8080);

console.log("listening...");
console.log("listening...");