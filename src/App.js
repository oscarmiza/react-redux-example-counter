import React from 'react';
import Counter from './components/Counter'
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
