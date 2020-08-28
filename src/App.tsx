import React from 'react';
import { Router, Route } from 'react-router';

import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import history from './history';

import HomePage from './components/HomePage';

function App () {
  return (
    <div className='App'>
      <ConfigProvider locale={enUS}>
        <Router history={history}>
          <Route exact path='/' component={HomePage} />
        </Router>
      </ConfigProvider>
    </div>
  );
}

export default App;
