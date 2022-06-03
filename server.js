import * as http from 'http';
import * as url from 'url';

export function start(route) {
    function onRequest(req, res) {
        var pathname=url.parse(req.url).pathname;
        console.log(`request for ${pathname} received`);    
        
        route(pathname);

        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hi Dude");
        res.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("server started");
}

export default {start};