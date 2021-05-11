import express from 'express';
import { assignments, displayAssignments } from '../models/assignment-database';

const routes = express.Router();

routes.get('/api/assignments', (req, res) => {
    res.json(displayAssignments()); //could also just be res.json(assignments);
    res.status(200);
});

export default routes;