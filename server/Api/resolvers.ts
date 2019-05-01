import { Context } from './Context'

export default {
  Query: {
    hosts: (root: any, args: any, context: Context) => context.db.get('hosts').value(),
    host: (root: any, args: any, context: Context) => context.db.get('hosts').find({ id: args.id }).value(),
  },
}
