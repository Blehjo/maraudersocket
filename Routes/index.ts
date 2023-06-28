import { actionRouter } from "./action";
import { deviceRouter } from "./device";
import { pinRouter } from "./pin";

export const router = require("express").Router();

router.use('/action', actionRouter);
router.use('/device', deviceRouter);
router.use('/pin', pinRouter);