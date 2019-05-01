import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import mkdirp from 'mkdirp'
import shortid from 'shortid'
import { resolve } from 'path'

mkdirp(resolve(__dirname, '../../live'), () => {})

const db = low(new FileSync(resolve(__dirname, '../../live/db.json')))

db.defaults({
  hosts: [
    {
      id: shortid.generate(),
      hostname: 'localhost',
      port: '2511',
      token: '',
    }
  ],
  servers: [],
  users: []
}).write()

export default db
