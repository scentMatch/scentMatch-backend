/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {email:'shadman@gmail', firstName: 'Shadman', lastName:'Chowdhury', password:'shadman', vibe:'bold'},
    {email:'gp@gmail', firstName: 'Gurupriyan', lastName:'Jayakaran', password:'gurupriyan', vibe:'lowkey'},
    {email:'jose@gmail', firstName: 'Jose', lastName:'Mazhuvanchery', password:'jose', vibe:'sensual'},
    {email:'warin@gmail', firstName: 'Warin', lastName:'Wohab', password:'warin', vibe:'soft'},
    {email:'abu@gmail', firstName: 'Abu', lastName:'Sufian', password:'abu', vibe:'bold'},
    {email:'farouk@gmail', firstName: 'Farouk', lastName:'Katakpaou', password:'farouk', vibe:'energetic'},
    {email:'kazi@gmail', firstName: 'Kazi', lastName:'Haque', password:'kazi', vibe:'composed'},
    {email:'teevee@gmail', firstName: 'Tanvir', lastName:'Ahmed', password:'teevee', vibe:'social butterfly'},
    {email:'obaid@gmail', firstName: 'Obaid', lastName:'Ahmed', password:'obaid', vibe:'romantic'},
    {email:'arno@gmail', firstName: 'Arno', lastName:'Hasan', password:'arno', vibe:'lowkey'},
  ]);
};
