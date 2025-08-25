import bookService from "../service/book.service.js";

async function createBookController(req, res) {
    const newBook = req.body;
    const userId = req.user.id;

    try {
        const createdBook = await bookService.createBookService(newBook, userId);
        res.status(201).json(createdBook);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function findAllBooksController(req, res) {
    try {
        const books = await bookService.findAllBooksService();
        res.send(books);
    } catch (error) {
        res.status(404).send(error.message);
    }

}

async function findBookByIdController(req, res) {
    const bookId = req.params.id;
    try {
        const books = await bookService.findBookByIdController(bookId);
        return res.send(books);
    } catch (error) {
        return res.status(400).send(error.message);
    }

}

async function updateBookController(req, res) {
    const updatedBook = req.body;
    const bookId = req.params.id;
    const userId = req.userId;

    try {
        const response = await bookService.updateBookService(
            bookId, 
            updatedBook, 
            userId
        );
        return res.send(response);
        } catch (error) {
            res.status(400).send(error.message);
        }
}

async function deleteBookController(req, res) {
    const BookId = req.params.id;
    const userId = req.userId;

    try {
        const response = await bookService.deleteBookService(BookId, userId);
        return res.send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


export default {
    createBookController,
    findAllBooksController,
    findBookByIdController,
    updateBookController,
    deleteBookController
}