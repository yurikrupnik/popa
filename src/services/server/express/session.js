import session from 'express-session';
import connect from 'connect-mongo';
import {databaseUrl} from '../../../config';
let MongoStore = connect(session);

export default (app, databaseUrl) => {
    let opts = {url: databaseUrl};
    app.use(session({
        secret: 'slomo',
        saveUninitialized: false,
        resave: false, // need to touch and then can use false as the value
        store: new MongoStore(opts)
    }));
}