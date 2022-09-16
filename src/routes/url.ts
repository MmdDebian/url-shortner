import { Router } from 'express';
import { shorten } from '../controllers/urlController';
const router = Router();

router.post('/' , shorten)

export default router ;