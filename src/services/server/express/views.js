import path from 'path';

export default (app) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join('dist', 'views'));
}