import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Products from './components/Products.js'
import Login from './containers/Login.js';
import AccountsList from './containers/AccountsList';

import './style/my-dot-theme.css';
import './style/style.css';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>>
                <Route exact path="/accountslist" component={AccountsList} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Products} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));