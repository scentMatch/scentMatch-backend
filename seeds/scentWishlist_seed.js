/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('scentWishlist').del()
  await knex('scentWishlist').insert([
    {user_id: 1, scent_id: 10},
    {user_id: 2, scent_id: 9},
    {user_id: 3, scent_id: 8},
    {user_id: 4, scent_id: 7},
    {user_id: 5, scent_id: 6},
    {user_id: 6, scent_id: 5},
    {user_id: 7, scent_id: 4},
    {user_id: 8, scent_id: 3},
    {user_id: 9, scent_id: 2},
    {user_id: 10, scent_id: 1},
  ]);
};
