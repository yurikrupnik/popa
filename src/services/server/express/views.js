import path from 'path';
// import {DIST_ROOT} from '../../../config';

export default (app, distRoot) => { // set view engine, look for render middleware
    app.set('view engine', 'ejs');
    // console.log('rootPath', rootPath);

    app.set('views', path.join(distRoot, 'pages'));
}