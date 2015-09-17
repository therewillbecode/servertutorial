/**
 * Created by Tom on 17/09/2015.
 */
var http = require("http");
var url = require("url");

function start(route) {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received")
        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('22');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started");
}

module.exports.start = start;

