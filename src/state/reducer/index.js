// import counter from './counter';
// import counters from './counters';
// // import payments from '../../api/payments/reducer';
// import payments from '../data/payments/reducer';
// import friends from '../data/friends/reducer';
//
// import form from '../control/form/reducer';
// import user from './user';
// import errors from './errors';
let errors = (state = [], action) => {
    return state;
};

import {combineReducers} from 'redux';

const reducers = {
    // user,
    // counters,
    // counter,
    // payments,
    // friends,
    // form,
    errors
};

export default combineReducers(reducers);