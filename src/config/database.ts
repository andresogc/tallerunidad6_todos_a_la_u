import { knex } from 'knex'
import dotenv  from 'dotenv'

dotenv.config()

export const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 9091,
        database: 'gestion_citas',
        user: 'root',
        password: 'changeme',
    },
})

export default db