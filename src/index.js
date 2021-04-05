import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store"
import { Provider} from "react-redux";
import App from './App';
import {PersistGate} from "redux-persist/es/integration/react"

ReactDOM.render(
<Provider store = {store.store}>
  <PersistGate loading={null} persistor={store.persistor}>
  
    <App />
    </PersistGate>
    </Provider>,
  document.getElementById('root')
);

