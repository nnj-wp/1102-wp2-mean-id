import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App_51 from './App_51';
import { AppProvider_51 } from './context/appContext_51';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_51>
      <App_51 />
    </AppProvider_51>
  </React.StrictMode>,
  document.getElementById('root')
);
