// Error handling
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import errorPageStyle from './../routes/error/ErrorPage.css';
import { ErrorPageWithoutStyle } from './../routes/error/ErrorPage';
import Html from './../components/Html';

const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
export default app => app.use((err, req, res, next) => {
    console.error(pe.render(err));
    const html = ReactDOM.renderToStaticMarkup(
        <Html
            title="Internal Server Error"
            description={err.message}
            styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
        >
            {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
        </Html>,
    );
    res.status(err.status || 500);
    res.send(`<!doctype html>${html}`);
});

