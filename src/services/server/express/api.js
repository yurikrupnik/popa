import apiMiddleware from '../../../api'; // array api middleware
// import auth from '../../../api';
// import forbidden from './forbidden';
import {apiPrefix} from '../../../config';
export default (app) => {
    // app.use(auth);
    app.use(apiPrefix, apiMiddleware);
}