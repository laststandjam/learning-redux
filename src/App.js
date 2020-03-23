import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import Posts from './component/Post'
import Postform from './component/Postform'
import store from './component/store'




function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Postform />
       <Posts />
      
      </header>
    </div>
    </Provider>
  );
}

export default App;
