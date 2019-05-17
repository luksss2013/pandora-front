import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Blueprint from './funcionalidades/layout/Blueprint';
import { createStore, applyMiddleware } from 'redux';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import mySaga from './funcionalidades/cadastros/funcionarios/FuncionarioSaga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(
      applyMiddleware(sagaMiddleware, logger)
   )
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
 <Provider store={store}>
    <Blueprint />
 </Provider>,
 document.getElementById('app')
);
