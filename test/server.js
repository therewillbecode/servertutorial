/**
 * Created by Tom on 17/09/2015.
 */

var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('2+2');
    response.end();

}).listen(8888);

console.log("server has started");