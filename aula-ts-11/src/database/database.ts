import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "ex", // seu user
    password: "ex11", // sua senha
    database: "ex11"
})

export { connection };