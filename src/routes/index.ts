import { Router } from 'express';
import { error, invalidUrl } from '../middlewares/error';
import url from './url';
const router = Router();

router.use('/url' , url);
router.all('*' , invalidUrl);
router.use(error);

export default router ;