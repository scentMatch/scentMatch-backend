/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
    table.increments('id').primary()
    table.string("email").notNullable().unique();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("password").notNullable();
    table.string("vibe").notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")
};
