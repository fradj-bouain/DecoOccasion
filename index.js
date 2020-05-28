import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducer from './reducers';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)
(createStore);

console.log(Reducer);

ReactDOM.render(
<Provider   store={createStoreWithMiddleware(Reducer , 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
       <Routes/>
    </BrowserRouter>
</Provider>

    , document.getElementById('root'));
