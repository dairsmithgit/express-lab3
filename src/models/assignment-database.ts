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
        total: 20,
        score: 14
    },
    {
        id: 4,
        name: "Express Lab 3",
        completed: true,
        total: 10,
        score: 9
    }
];

let nextId = 5;

export const pushAssignment = (assignment: Assignment):void => {
    assignment.id = nextId;
    nextId++;
    assignments.push(assignment);
};

export const displayAssignments = (): Assignment[] => {
    return assignments;
}

export function readAssignmentById(id: number): Assignment|undefined {
    return assignments.find(assignment => assignment.id === id);
}

export function editAssignment(assignment: Assignment): boolean {
    const index = assignments.findIndex(assignment => assignment.id === assignment.id);
    if (index == -1) {
        return false;
    } else {
        assignments[index] = assignment;
        return true;
    }
}

export function deleteAssignment(id: number): boolean {
    const index = assignments.findIndex(assignment => assignment.id === id);
    if (index == -1) {
        return false;
    } else {
        assignments.splice(index, 1);
        return true;
    }
}