import {createStore} from 'redux';
import reducer from '../reducer';
import composed from './composed';
let configureStore = (initialState = {}) => createStore(reducer, initialState, composed);
export default configureStore;