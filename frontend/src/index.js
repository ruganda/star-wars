import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});


client
  .query({
    query: gql`
      query fetchPeople {
        people(page: 2) {
          next
          previous
          results{
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);