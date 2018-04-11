import React from 'react';
import reactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';

import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/app';



// 初始化
renderWithHotReload(App);


// 热更新
if(module.hot) {
  module.hot.accept('components/app',() => {
    const NextApp = require('components/app').default;
    renderWithHotReload(NextApp);
  })
}

function renderWithHotReload(RootElement) {
  reactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          {RootElement}
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

