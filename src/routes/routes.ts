import express from 'express';
import Assignment from '../models/Assignment';
import { assignments, pushAssignment, deleteAssignment, readAssignmentById } from '../models/assignment-database';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.render("homepage", { assignments });
});

routes.get('/add', (req, res) => {
    res.render("assignment-form");
});

routes.post('/add', (req, res) => {
    let assignment: Assignment = {
        name: req.body.name,
        score: parseInt(req.body.score),
        total: parseInt(req.body.total),
        completed: !!req.body.completed
    };
    pushAssignment(assignment);
    res.render("assignment-results", { assignment });
});

routes.get('/:id/delete', (req, res) => {
    const id = parseInt(req.params.id);
    const assignment = readAssignmentById(id);
    if (assignment) {
        deleteAssignment(id);
        res.render('delete-assignment-confirm', { name: assignment.name });
    } else {
        res.status(404);
    }
});

export default routes;