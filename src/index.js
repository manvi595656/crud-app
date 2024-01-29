import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import todoApp from "./reducers/index";
import { Provider } from 'react-redux';
import {createStore} from 'redux';


const store = createStore(todoApp);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
