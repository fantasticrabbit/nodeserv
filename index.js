import * as server from './server.js';
import * as router from './router.js';

server.start(router.route);