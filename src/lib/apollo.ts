import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4op9ve60qa101xkfjwn3exx/master',
  cache: new InMemoryCache()
})
