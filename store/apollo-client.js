import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import fetch from 'node-fetch'
import EventEmitter from 'eventemitter3'

if (process.browser) {
  window.fetch = window.fetch || fetch
} else {
  global.fetch = global.fetch || fetch
}

const GRAPHQL_URI = process.env.GRAPHQL_URI || 'http://localhost:8080/graphql'

export const client = new ApolloClient({
  ssrMode: !process.browser,
  link: new HttpLink({
    uri: GRAPHQL_URI
  }),
  cache: new InMemoryCache({
    dataIdFromObject: object => object.slug
  })
})

// client.emitter = new EventEmitter();

// let runCount = 0;
// function overwriteApolloClientMethods () {
//   if(runCount > 0) return;
//   runCount++;

//   // const apolloQuery = CLIENT.query.bind(CLIENT);

//   // CLIENT.query = async (...args) => {
//   //   await CLIENT.cache.reset()
//   //   return apolloQuery(...args)
//   // }

//   // const apolloMutation = CLIENT.mutate.bind(CLIENT)

//   // CLIENT.mutate = async (...args) => {
//   //   let rtnVal = await apolloMutation(...args)
//   //   CLIENT.emitter.emit('update')
//   //   return rtnVal
//   // }

// };
// overwriteApolloClientMethods();





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

