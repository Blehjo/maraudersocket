import express from 'express';
import { getSingleAction, getUserActions } from '../Api/action.api';

export const actionRouter = express.Router();

actionRouter.get('/', async (req, res) => {
    try {
        getUserActions()
        .then((actions) => {
            actions.map((action) => {
                actionRouter.get(`/${action.actionId}`, async (req, res) => {

                })
            })
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

actionRouter.get('/:id', async (req, res) => {
    try {
        getSingleAction(req.params.id)
        .then((action) => {
            actionRouter.get(`/${action.actionId}`, async (req, res) => {
        
            })
        });
    } catch (err) {
        res.status(500).json(err)
    }
});