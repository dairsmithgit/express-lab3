import express from 'express';
import { assignments, displayAssignments, findAverage } from '../models/assignment-database';

const routes = express.Router();

routes.get('/api/assignments', (req, res) => {
    res.json(displayAssignments()); //could also just be res.json(assignments);
    res.status(200);
});

routes.get('/api/summary', (req, res) => {
    res.json(findAverage(assignments));
});

// the api/summary will require a function

export default routes;