
exports.seed = function(knex) {
      return knex('task').insert([
        {description: 'Find and retrieve the vacuum', additionalInfo: 'The better you are at this, the easier the week will be', notes: 'Even little kids can do this', completed: false, projectID: 1}
      ]);
};
