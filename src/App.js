import React from 'react';
import RoutesApp from './routes';
import {Provider} from 'react-redux';
import storeConfig from './store';
import './globalStyles.css';

function App() {
  const store = storeConfig();

  return (
    <Provider store={store}>
      <RoutesApp />
    </Provider>
  );
}

export default App;
