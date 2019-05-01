import * as low from 'lowdb'
import * as FileSync from 'lowdb/adapters/FileSync'
import * as mkdirp from 'mkdirp'
import { resolve } from 'path'

mkdirp(resolve(__dirname, '../../live'), () => {})

const db = low(new FileSync(resolve(__dirname, '../../live/db.json')))

db.defaults({
  hosts: [
    {
      hostname: 'localhost',
      port: '2511',
      token: '',
    }
  ],
  servers: [],
  users: []
}).write()

export default db
