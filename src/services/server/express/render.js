// import state from './state';
// import render from './render';
// import matchRouter from './matchRouter';
import configureStore from '../../../state/store';
// config redux store and save in locals - template will use it to render initialized app with server side state

// import {fountUser} from '../../../../redux/actions/user';
// => returns the template function compiled with undesrcore (lodash) templating engine.

// => returns the template function compiled with undesrcore (lodash) templating engine.

// And then use it somewhere in your code
let state = (req, res, next) => {
    let store = configureStore();
    // if (req.isAuthenticated()) { // todo client it
    //     store.dispatch(fountUser(req.user));
    // }
    // store.dispatch(fetchPayments()).then(() => {
    // console.log('req.authInfo', req.authInfo);
    // console.log('res.locals.error', res.locals.error);
    res.locals.state = store.getState();
    next();
    // });

};

let render = (req, res) => {
    // if (req.url.match(/\//gi).length > 1) { // handle second slash in url error to load main.js todo-fix with webpack
    //     res.redirect(`/${req.url.split('/')[1]}`);
    //     return;
    // }
    res.status(200);
    res.render('index', {data: res.locals.state});
};

export default (app) => {
    app.get('*', [
        // matchRouter,
        state,
        render,
    ]);
}