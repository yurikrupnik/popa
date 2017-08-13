import cookieParser from 'cookie-parser';
import config from './config';
import './db';
import app from './app';

// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
// app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());

//
// Authentication
// -----------------------------------------------------------------------------
// app.use(
//   expressJwt({
//     secret: config.auth.jwt.secret,
//     credentialsRequired: false,
//     getToken: req => req.cookies.id_token,
//   }),
// );
// Error handler for express-jwt
// app.use((err, req, res, next) => {
//   eslint-disable-line no-unused-vars
// if (err instanceof Jwt401Error) {
//   console.error('[express-jwt-error]', req.cookies.id_token);
//   `clearCookie`, otherwise user can't use web-app until cookie expires
// res.clearCookie('id_token');
// }
// next(err);
// });
//
// app.use(passport.initialize());

// if (__DEV__) {
//     app.enable('trust proxy');
// }
// app.get(
//   '/login/facebook',
//   passport.authenticate('facebook', {
//     scope: ['email', 'user_location'],
//     session: false,
//   }),
// );
// app.get(
//   '/login/facebook/return',
//   passport.authenticate('facebook', {
//     failureRedirect: '/login',
//     session: false,
//   }),
//   (req, res) => {
//     const expiresIn = 60 * 60 * 24 * 180; // 180 days
//     const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn });
//     res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
//     res.redirect('/');
//   },
// );


//
// Launch the server
// -----------------------------------------------------------------------------
// const promise = models.sync().catch(err => console.error(err.stack));
if (!module.hot) {
    // promise.then(() => {
    app.listen(config.port, () => {
        console.info(`The server is running at http://localhost:${config.port}/`);
    });
    // });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
    app.hot = module.hot;
    module.hot.accept('./router');
}

export default app;
