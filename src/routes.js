import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import restricted from './restricted';
import Layout from './screens/__layout/layout';

/* Components Example */
import ListPost from './screens/post'
import DetailPost from './screens/post/detail'


class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={restricted(ListPost)} />
          <Route path="/posts/:postId" component={restricted(DetailPost)} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
