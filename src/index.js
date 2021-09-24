import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./customizedStore";
import { BrowserRouter } from "react-router-dom";
import { addBug, removeBug, resolveBug } from "./actions";

store.subscribe(() => {
  console.log("store changed!", store.getState());
});

const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(addBug("Bug 1"));

store.dispatch(addBug("Bug 2"));

store.dispatch(addBug("Bug 3"));

store.dispatch(resolveBug(1))
unsubscribe();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
