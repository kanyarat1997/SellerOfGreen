import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { RouterApp } from './Route';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store = {store}>
        <RouterApp />
    </Provider>
    , document.getElementById('root')
)
serviceWorker.unregister();
