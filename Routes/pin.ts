import express from 'express';
import { getSinglePin, getUserPins } from '../Api/pin.api';

export const pinRouter = express.Router();

pinRouter.get('/', async (req, res) => {
    try {
        getUserPins()
        .then((pins) => {
            pins.map((pin) => {
                pinRouter.get(`/${pin.pinId}`, async (req, res) => {

                })
            })
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

pinRouter.get('/:id', async (req, res) => {
    try {
        getSinglePin(req.params.id)
        .then((pin) => {
            pinRouter.get(`/${pin.pinId}`, async (req, res) => {
        
            })
        });
    } catch (err) {
        res.status(500).json(err)
    }
});