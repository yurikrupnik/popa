// server-side rendering middleware
import fetch from 'node-fetch';
import React from 'react';
import ReactDOM from 'react-dom/server';
import createFetch from './../createFetch';
import config from './../config';
import App from './../components/App';
import Html from './../components/Html';
import router from './../router';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved

export default app => app.get('*', async (req, res, next) => {
    try {
        const css = new Set();

        // Global (context) variables that can be easily accessed from any React component
        // https://facebook.github.io/react/docs/context.html
        const context = {
            // Enables critical path CSS rendering
            // https://github.com/kriasoft/isomorphic-style-loader
            insertCss: (...styles) => {
                // eslint-disable-next-line no-underscore-dangle
                styles.forEach(style => css.add(style._getCss()));
            },
            // Universal HTTP client
            fetch: createFetch(fetch, {
                baseUrl: config.api.serverUrl,
                cookie: req.headers.cookie
            })
        };

        const route = await router.resolve({
            ...context,
            path: req.path,
            query: req.query
        });

        if (route.redirect) {
            res.redirect(route.status || 302, route.redirect);
            return;
        }

        const data = { ...route };
        data.children = ReactDOM.renderToString(
            <App context={context}>
                {route.component}
            </App>,
        );
        data.styles = [{ id: 'css', cssText: [...css].join('') }];
        data.scripts = [assets.vendor.js];
        if (route.chunks) {
            data.scripts.push(...route.chunks.map(chunk => assets[chunk].js));
        }
        data.scripts.push(assets.client.js);
        data.app = {
            apiUrl: config.api.clientUrl
        };

        const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
    } catch (err) {
        next(err);
    }
});
