import express from 'express';
import { getSingleDevice, getUserDevices } from '../Api/device.api';

export const deviceRouter = express.Router();

deviceRouter.get('/', async (req, res) => {
    try {
        getUserDevices()
        .then((devices) => {
            devices.map((device) => {
                deviceRouter.get(`/${device.deviceId}`, async (req, res) => {

                })
            })
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

deviceRouter.get('/:id', async (req, res) => {
    try {
        getSingleDevice(req.params.id)
        .then((device) => {
            deviceRouter.get(`/${device.deviceId}`, async (req, res) => {
        
            })
        });
    } catch (err) {
        res.status(500).json(err)
    }
});