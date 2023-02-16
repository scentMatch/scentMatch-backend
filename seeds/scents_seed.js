/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('scents').del()
  await knex('scents').insert([
    {name: 'Dior Sauvage', vibe:'bold'},
    {name: 'Acqua Di Gio', vibe:'lowkey'},
    {name: 'Creed Aventus', vibe:'sensual'},
    {name: 'Versace Crystal Noir', vibe:'soft'},
    {name: 'Versace Eros', vibe:'bold'},
    {name: 'Carolina Herrera Badboy', vibe:'energetic'},
    {name: 'Mont Blanc Explorer', vibe:'composed'},
    {name: 'Issey Miyake Leau Dissey', vibe:'social butterfly'},
    {name: 'Moschino Toyboy', vibe:'romantic'},
    {name: 'Yves Saint Laurent Le Homme', vibe:'lowkey'},
  ]);
};
