import express from 'express';
import Assignment from '../models/Assignment';
import { assignments, pushAssignment, deleteAssignment, readAssignmentById, editAssignment } from '../models/assignment-database';

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

routes.get('/:id/edit', (req, res) => {
    const id: number = parseInt(req.params.id);
    const assignment = readAssignmentById(id);
    if (assignments) {
        res.render("edit-assignment-form", { assignment });
    } else {
        res.status(404);
    }
});

routes.post('/:id/edit-confirm', (req, res) => {
    const assignment: Assignment = {
        id: parseInt(req.params.id),
        name: req.body.name,
        score: parseInt(req.body.score),
        total: parseInt(req.body.total),
        completed: !!req.body.completed
    }
    // if update player is player
    if (editAssignment(assignment)) {
        res.render('edit-assignment-confirm', { assignment });
    } else {
        res.status(404);
    }
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