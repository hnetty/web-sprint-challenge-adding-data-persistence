const express = require("express");
const helmet = require("helmet");


const db = require("../data/db-config.js");

const server = express();

server.use(helmet());
server.use(express.json());

// Getting a list of projects
server.get('/api/projects', (req, res) => {
    db("project")
    .then(proj => {
        res.status(200).json(proj);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Getting a list of resources
server.get('/api/resources', (req, res) => {
    db('resource')
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Getting a list of tasks WITH PROJ NAME/DESC
// *** NEEDS WORK ***
server.get('/api/tasks', (req, res) => {
    db('task')
})


// Adding a project
server.post('/api/projects', (req, res) => {
    db('project').insert(req.body)
    .then(ids => {
        const id = ids[0];

        db('project')
            .where({ id })
            .first()
        .then( proj => {
            res.status(201).json(proj);
        })
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Adding a resource
server.post('/api/resources', (req, res) => {
    db('resource').insert(req.body)
    .then(ids => {
        const id = ids[0];

        db('resource')
            .where({ id })
            .first()
        .then( resource => {
            res.status(201).json(resource);
        })
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Adding a task
server.post('/api/tasks', (req, res) => {
    db('task').insert(req.body)
    .then(ids => {
        const id = ids[0];

        db('task')
            .where({ id })
            .first()
        .then( task => {
            res.status(201).json(task);
        })
    })
    .catch(err => {
        res.status(500).json(err);
    });
});


