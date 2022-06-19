const knex = require("knex")({
    client: "mysql",
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Aadarsh@123',
        database: 'Aadarsh'
    }
})

knex.schema.createTable("students", table => {
    table.increments("id")
    table.string("username"),
        table.string("email"),
        table.string('password'),
        table.integer("phone")
}).then((data) => {
    console.log('Table Data has been Created');
}).catch((err) => {
    // console.log("nahi hoo raha");
})

module.exports = knex