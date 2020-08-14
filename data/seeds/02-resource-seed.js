
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('resource').insert([
        { name: 'Vacuum', description: 'Speedy boi'}
      ]);
    
};
