/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


if (process.env.BROWSER) {
    throw new Error(
        'Do not import `config.js` from inside the client-side code.',
    );
}

module.exports = {
    // Node.js app
    port: process.env.PORT || 3000,

    // API Gateway
    api: {
        // API URL to be used in the client-side code
        clientUrl: process.env.API_CLIENT_URL || '',
        // API URL to be used in the server-side code
        serverUrl: process.env.API_SERVER_URL ||
        `http://localhost:${process.env.PORT || 3000}`
    },

    // Database
    databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost/mussia',

    // Api
    apiPrefix: '/api',

    // Web analytics
    analytics: {
        // https://analytics.google.com/
        googleTrackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X
    },

    // Authentication
    auth: {
        jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

        // https://developers.facebook.com/
        facebook: {
            id: process.env.FACEBOOK_APP_ID || '144997135988664',
            secret: process.env.FACEBOOK_APP_SECRET || '483b8bb0f0aeb26744033814ef8fbc91'
        },
        facebook1: {
            clientID: '144997135988664',
            clientSecret: '483b8bb0f0aeb26744033814ef8fbc91',
            callbackURL: 'http://localhost:3000/auth/facebook/callback',
            profileFields: ['gender', 'cover', 'devices', 'education', 'interested_in', 'locale', 'timezone']
        },
        github: {
            'clientID': 'a567d7040a8339e48f84',
            'clientSecret': '764d3fddcf0d9bf9f0c541ee4e5e8a8c7a6db3c0',
            'callbackURL': 'http://127.0.0.1:3000/api/auth/github/callback'
        },

            // https://cloud.google.com/console/project
        google: {
            id: process.env.GOOGLE_CLIENT_ID ||
            '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
            secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
        },

        // https://apps.twitter.com/
        twitter: {
            key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
            secret: process.env.TWITTER_CONSUMER_SECRET ||
            'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
        }
    }
};
