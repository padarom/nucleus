import { ExpressExtension } from './Express'
import { Nuxt, Builder } from 'nuxt'

export default class NuxtServer implements ExpressExtension {

  public async bind(app: import("express").Application): Promise<any> {
    let config = require('../../nuxt.config')
    config.dev = !(process.env.NODE_ENV === 'production')

    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server
    app.set('port', port)
    app.set('host', host)

    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    } else {
      await nuxt.ready()
    }

    app.use(nuxt.render)
  }

}
