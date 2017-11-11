import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import fetch from 'node-fetch'

if (process.browser) {
  window.fetch = fetch
} else {
  global.fetch = fetch
}

const GRAPHQL_URI = process.env.GRAPHQL_URI || 'http://localhost:8080/graphql'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_URI
  }),
  cache: new InMemoryCache()
})

export const query = (...args) => {
  return client.query({
    query: gql(...args)
  })
}
