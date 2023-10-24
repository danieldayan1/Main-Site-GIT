import express from 'express';

import { QueryValidator } from '../middlewares/validator.middleware.js';
import {getSortedRepositoriesSchema} from '../dto/repository.dto.js';
import { getRepositoriesBySort } from '../controllers/repositories.controller.js';

const router = express.Router();

/* GET sorted repos */
router.get('/sort', QueryValidator(getSortedRepositoriesSchema), getRepositoriesBySort);

export default RepositoriesRouter;