import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import fetch from 'node-fetch'
import EventEmitter from 'eventemitter3'
import * as disableCache from 'apollo-cant-cache-me'

if (process.browser) {
  window.fetch = fetch
} else {
  global.fetch = fetch
}

const GRAPHQL_URI = process.env.GRAPHQL_URI || 'http://localhost:8080/graphql'
console.log(disableCache)
export const client = new ApolloClient({
  ssrMode: !process.browser,
  link: new HttpLink({
    uri: GRAPHQL_URI
  }),
  cache: new InMemoryCache({
    dataIdFromObject: object => object.slug
  })
})

client.emitter = new EventEmitter()

// const apolloQuery = client.query.bind(client)
// client.query = async (...args) => {
//   await client.cache.reset()
//   return apolloQuery(...args)
// }

const apolloMutation = client.mutate.bind(client)
client.mutate = async (...args) => {
  let rtnVal = await apolloMutation(...args)
  client.emitter.emit('update')
  return rtnVal
}

export const query = (...args) => {
  return client.query({
    query: gql(...args)
  })
}

export const mutate = (mutationTag, variables) => {
  return client.mutate({
    mutation: gql(mutationTag),
    variables
  })
}
