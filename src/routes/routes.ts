import express from 'express';
import Assignment from '../models/Assignment';
import { assignments, pushAssignment } from '../models/assignment-database';

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
    res.render("assignment-result", { assignment });
});

export default routes;