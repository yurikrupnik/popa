import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import FlatButton from 'material-ui/FlatButton';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     PrivateRoute,
//     withRouter,
//     Switch,
//     StaticRouter
// } from 'react-router-dom';
// import Header from '../Header';
// import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';

// import routes from '../App/routes';
// import Main from '../Main';
class Helo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>go go </div>)
    }
}

// import routes from '../App/routes';
// import Main from '../Main';
// import React from 'react';
import Header from '../../smart/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import RouteWithSubRoutes from '../../wrappers/routeWithRoutes';
const Main = ({routes}) => (
    <div>
        <Router>
            <div>
                <Header/>
                <div className="container">
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </div>
        </Router>
    </div>
);

import MaterialWrapper from './material';
import ProviderWrapper from './provider';


export default ({initialState}) => (
    <MaterialWrapper component={<ProviderWrapper initialState={initialState} component={<Main routes={[]} />}/>}/>
)