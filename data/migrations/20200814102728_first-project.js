
exports.up = function(knex) {
  
    return knex.schema
        .createTable("project", tbl => {
            tbl.increments("projectID");
            tbl.string("name").notNullable().index();
            tbl.string("description");
            tbl.boolean("completed").notNullable().defaultTo(false); 
        })
        .createTable("resource", tbl => {
            tbl.increments("resourceID");
            tbl.string("name").notNullable().index();
            tbl.string("description");
        })
        .createTable("task", tbl => {
            tbl.increments("taskID");
            tbl.string("description").notNullable();
            tbl.string("additionalInfo");
            tbl.string("notes");
            tbl.boolean("completed").notNullable().defaultTo(false);
            tbl.integer("projectID").unsigned().notNullable().references("id").inTable("project")
        })

        // Hybrid table
        .createTable("project_resources", tbl => {
            tbl.integer('projID').unsigned().notNullable().references("projectID").inTable("project")
            tbl.integer("resID").unsigned().notNullable().references("resourceID").inTable("resource")
            tbl.primary(['projID', 'resID'])
        })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project_resources");
};
