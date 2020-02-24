import React from 'react';
import apolloClient from './config/apolloSetup';
import { ApolloProvider } from '@apollo/react-hooks';
import Home from './component/Home'
import { Route, Switch } from 'react-router'
import Auth from './component/Auth';
const App = () => (
  <ApolloProvider client={apolloClient}>
  <Switch>
    {/* <Route exact path='/authentication' component={Auth} /> */}
    <Route path='/' component={Home} />
  </Switch>
  </ApolloProvider>
);

export default App;

