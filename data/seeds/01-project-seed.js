
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {projectID: 1, name: 'Cleaning offices', description: 'Vacuum the offices quickly', completed: false}
      ]);
    });
};
