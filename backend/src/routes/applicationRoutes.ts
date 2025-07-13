import { Router } from 'express';
import { createApplicationController } from '../presentation/controllers/applicationController';

const router = Router();

router.post('/', createApplicationController);

export default router;
