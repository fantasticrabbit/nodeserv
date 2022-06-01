import * as http from 'http';

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hi Dude");
    res.end();
}).listen(8888);
