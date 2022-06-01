import * as http from 'http';


export function start() {
    http.createServer(onRequest).listen(8888);
    console.log("server started");
}

export function onRequest(req, res) {
    console.log('request received');    
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hi Dude");
    res.end();
}

export default {start};