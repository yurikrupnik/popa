/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import cx from 'classnames';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
    render() {
        return (
            <div role="navigation">
                <Link to="/about">
                    About
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
                <span > | </span>
                <Link to="/login">
                    Log in
                </Link>
                <span >or</span>
                <Link to="/register">
                    Sign up
                </Link>
            </div>
        );
    }
}

export default Navigation;
