import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';

export const Context = createContext({});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        user: new UserStore(),
        //device: new DeviceStore(),
      }}
    >
      <App />
    </Context.Provider>
  </BrowserRouter>
);
