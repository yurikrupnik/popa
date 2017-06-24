// import state from './state';
// import render from './render';
// import matchRouter from './matchRouter';

import configureStore from '../../../state/store';
// config redux store and save in locals - template will use it to render initialized app with server side state

// import {fountUser} from '../../../../redux/actions/user';

const state = (req, res, next) => {
    let store = configureStore();
    // if (req.isAuthenticated()) { // todo client it
    //     store.dispatch(fountUser(req.user));
    // }
    // store.dispatch(fetchPayments()).then(() => {
    res.locals.state = store.getState();
    next();
    // });

};

const render = (req, res) => {
    res.status(200);
    res.render('index');
};

export default (app) => {
    app.get('*', [
        // matchRouter,
        state,
        render,
    ]);
};