import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// dev tools
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

// redux
import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers/index';
import {Provider} from "react-redux";

// redux store
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
