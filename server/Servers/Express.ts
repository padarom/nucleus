import express from 'express'

export interface ExpressExtension {
  bind(express: express.Application): Promise<any>
}

export default class Express {

  protected static instance: Express
  protected app: express.Application

  public static getInstance(): Express {
    if (this.instance) return this.instance

    return this.instance = new Express()
  }

  protected constructor() {
    this.app = express()

    this.app.set('port', process.env.PORT || 3000)
    this.app.set('host', process.env.HOST || '127.0.0.1')
  }

  public add(extension: ExpressExtension): Promise<any> {
    return extension.bind(this.app)
  }

  public async run() {
    this.app.listen(this.app.get('port'), this.app.get('host'))
  }

}
