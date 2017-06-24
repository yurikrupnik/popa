
import server from './server';
import {port, host} from './config';
server.listen(port, () => console.log(`Listening on: ${host}`));