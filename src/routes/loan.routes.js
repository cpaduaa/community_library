import { Router } from 'express';
import loanController from '../controller/loan.controller.js';
import { validate } from '../middlewares/validation.middlewares.js';
import { loanSchema } from '../schema/loan.schema.js';

const router = Router();

router.post('/loans', loanController.createLoanLoanController);
router.get('/loans', loanController.findAllLoansController);


export default router;