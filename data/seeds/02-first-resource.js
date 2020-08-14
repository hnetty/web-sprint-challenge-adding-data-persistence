
exports.seed = function(knex) {
 
  return knex('resource').truncate()
  .then(function () {
      return knex('resource').insert([
        {name: 'Vacuum', description: 'A useful device to clean the carpet floors'}
      ]);
   });
};
