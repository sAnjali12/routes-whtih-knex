var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'navgurukul',
      database: 'navgurukulInformation'
    },
  
  })
const language = [
    { name: 'Anajali', language: "Hindi" },
    { name: 'Kajal', language: "Bihari" },
    { name: 'Shivani', language: "Hindi" },
    { name: 'Venu', language: "maradhi" },
    { name: 'Bulbul', language:"Hindi" },
    { name: 'Zeva', language: "Bangali" },
    { name: 'Anjali S', language: "Hindi" },
    { name: 'Ranu', language: "panjabi" },
    {name: 'vartha', language: "tamil"},
]

knex("languages").insert(language).then(() =>console.log("data inserted"))
.catch((err) => { console.log(err); throw err })
.finally(() => {
    knex.destroy();
});


