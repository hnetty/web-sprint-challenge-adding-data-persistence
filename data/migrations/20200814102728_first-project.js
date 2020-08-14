
exports.up = function(knex) {
  
    return knex.schema
        .createTable("project", tbl => {
            tbl.increments("id");
            tbl.string("name").notNullable().index();
            tbl.string("description");
            tbl.boolean("completed").notNullable().defaultTo(false); 
        })
        .createTable("resource", tbl => {
            tbl.increments("id");
            tbl.string("name").notNullable().index();
            tbl.string("description");
        })
        .createTable("task", tbl => {
            tbl.increments("id");
            tbl.string("description").notNullable();
            tbl.string("additionalInfo");
            tbl.string("notes");
            tbl.boolean("completed").notNullable().defaultTo(false);
            tbl.integer("projectID").unsigned().notNullable().references("id").inTable("projects")
        })

        // Hybrid table
        .createTable("project_resources", tbl => {
            tbl.integer('projectID').unsigned().notNullable().references("id").inTable("projects")
            tbl.integer("resourceID").unsigned().notNullable().references("id").inTable("resource")
            tbl.primary(['projectID', 'resourceID'])
        })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project_resources");
};
