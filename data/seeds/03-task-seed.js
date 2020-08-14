
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('task').insert([
        {taskID: 1, description: 'Vacuum the offices asap', additionalInfo: 'make it quick', notes: 'this isnt hard', completed: false, projID: 1}
      ]);
    
};
