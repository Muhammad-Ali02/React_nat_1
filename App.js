import React from 'react'
import MainApp from "./navigation/MainApp";
import { Provider } from 'react-redux';
import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App;