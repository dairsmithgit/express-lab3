import express from 'express';
import routes from '../routes/routes';
import Assignment from './Assignment';

export const assignments: Assignment[] = [
    {
        id: 1,
        name: "HW 1",
        completed: true,
        total: 10,
        score: 8
    },
    {
        id: 2,
        name: "Spelling Test",
        completed: true,
        total: 50,
        score: 45
    },
    {
        id: 3,
        name: "Biology homework",
        completed: false,
        total: 10,
        score: 5
    },
    {
        id: 4,
        name: "Express Lab 3",
        completed: true,
        total: 10,
        score: 9
    }
];