import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import Routes from './routes';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <HashRouter>
      <Routes/>
    </HashRouter>
  </Provider>
)

render(<Root />, document.getElementById('root'));
registerServiceWorker();
