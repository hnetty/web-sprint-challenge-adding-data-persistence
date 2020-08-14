
exports.seed = function(knex) {
 
      return knex('resource').insert([
        {name: 'Vacuum', description: 'A useful device to clean the carpet floors'}
      ]);
   
};
