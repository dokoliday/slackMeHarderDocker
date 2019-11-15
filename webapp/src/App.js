import React from 'react';
import apolloClient from './config/apolloSetup';
import { ApolloProvider } from '@apollo/react-hooks';
import Home from './component/Channels'

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Home/>
  </ApolloProvider>
);

export default App;