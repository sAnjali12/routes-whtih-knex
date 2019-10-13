var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'navgurukul',
    database: 'navgurukulInformation'
  },

})

knex.schema.createTable('languages', (table) => {
  table.increments('id')
  table.string('name')
  table.string('language')
})
.then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
  });
