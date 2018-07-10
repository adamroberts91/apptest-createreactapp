import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style/my-dot-theme.css';
import './style/style.css';

import './js/index';

import Login from './containers/Login';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));