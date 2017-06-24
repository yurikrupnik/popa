
import app from './app';
import {port, host} from './config';
app.listen(port, () => console.log(`Listening on: ${host}`));