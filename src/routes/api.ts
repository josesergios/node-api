import { Router } from "express";
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.name);

router.post('/phrases', ApiController.createPhrases);
router.get('/phrases', ApiController.listPhrases);
router.get('/phrases/aleatoria', ApiController.randomPhrase);
router.get('/phrases/:id', ApiController.getPhrase);
router.put('/phrases/:id', ApiController.updatePhrase);
router.delete('/phrases/:id', ApiController.deletePhrase);


export default router;