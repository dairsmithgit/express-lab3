import express from 'express';
import { assignments } from '../models/assignment-database';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.render("homepage", { assignments });
});

export default routes;