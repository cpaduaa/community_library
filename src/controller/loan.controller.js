import loanService from '../service/loan.service.js';

async function createLoanLoanController(req, res) {
    const { bookId, dueDate } = req.body;
    const userId = req.user.id;

    try {
        const createdLoan = await loanService.createLoanService(
            userId, 
            bookId, 
            dueDate
        );
        res.status(201).json(createdLoan);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default {
    createLoanLoanController
}