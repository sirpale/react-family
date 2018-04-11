import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Bundle from './bundle';
import Loading from  'components/loading';


import home from 'bundle-loader?lazy&name=home!pages/home';
import page1 from 'bundle-loader?lazy&name=home!pages/page1';
import counter from 'bundle-loader?lazy&name=home!pages/counter';
import userInfo from 'bundle-loader?lazy&name=home!pages/user-info';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/notfound';


const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);

const getRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={createComponent(home)} />
      <Route path="/page1" component={createComponent(page1)} />
      <Route path="/counter" component={createComponent(counter)} />
      <Route path="/user-info" component={createComponent(userInfo)} />
      <Route component={createComponent(NotFound)} />
    </Switch>
  </Router>
);

export default getRouter;
