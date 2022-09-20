import { Router } from 'express';
import { getUrl, shorten } from '../controllers/urlController';
import { error, invalidUrl } from '../middlewares/error';
const router = Router();

router.post('/' , shorten);
router.get('/:id' , getUrl);
router.all('*' , invalidUrl);
router.use(error);


export default router ;