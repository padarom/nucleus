import Express from './Servers/Express'
import ApolloServer from './Servers/ApolloServer'
import NuxtServer from './Servers/NuxtServer'

;(async () => {
  let express = Express.getInstance()

  await express.add(new ApolloServer())
  await express.add(new NuxtServer())

  express.run()
})()
