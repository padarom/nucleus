import { ExpressExtension } from './Express'
import { ApolloServer as Apollo, gql } from 'apollo-server-express'
import resolvers from '../Api/resolvers'
import typeDefs from '../Api/typeDefs'

export default class ApolloServer implements ExpressExtension {

  public async bind(app: import('express').Application): Promise<any> {
    const server = new Apollo({ typeDefs, resolvers })
    server.applyMiddleware({ app })
  }

}
