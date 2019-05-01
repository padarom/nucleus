import db from '../Core/Database'
type Database = typeof db

export default ({ req, connection }: any) : Context => {
  return {
    db
  }
}

export type Context = {
  db: Database
}
