/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("scentWishlist", table => {
        table.increments('id').primary()
        table.integer("user_id").notNullable();
        table.integer("scent_id").notNullable();
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("scentWishlist")
};
