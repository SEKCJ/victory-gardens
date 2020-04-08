import * as dotenv from 'dotenv';

dotenv.config();

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
        connectionLimit: 10
    },
    port: process.env.PORT,
    auth: {
        secret: process.env.SECRET
    }
} 