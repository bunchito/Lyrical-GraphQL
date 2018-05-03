import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SongList from './components/SongList';

// This assumes that GraphQL server is available in /graphql
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route path="/" component={SongList} />
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
