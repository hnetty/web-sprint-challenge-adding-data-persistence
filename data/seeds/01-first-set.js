
exports.seed = function(knex) {
 
      return knex('project').insert([
        {name: 'Cleaning the office', description: 'The offices need to be cleaned thoroughly', completed: false}
      ]);
   
};
