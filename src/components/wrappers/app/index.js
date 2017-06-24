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
import MaterialWrapper from '../material';
import ProviderWrapper from '../store-provider';


class Main extends Component {
    render() {
        return (<div>hello from inside route yesssss! no1!!</div>)
    }
}

// class App extends Component {
//     render() {
//         return ( <MaterialWrapper component={<ProviderWrapper initialState={initialState} component={<Main />}/>}/>)
//     }
// }
const App = ({initialState}) => (
    <MaterialWrapper component={<ProviderWrapper initialState={initialState} component={<Main />}/>}/>
);

export default App;