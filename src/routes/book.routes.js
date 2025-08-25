import bookControllers from "../controller/book.controllers.js";
import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {validate} from "../middlewares/validation.middlewares.js";
import { bookSchema } from "../schema/book.schema.js";

const router = Router();

router.get("/books", bookControllers.findAllBooksController);

router.post(
    "/books", 
    validate(bookSchema),
    authMiddleware, 
    bookControllers.createBookController
);
router.get("/books/search", bookControllers.searchBooksController);
router.get("/books/:id", validateBookId, bookControllers.findBookByIdController);
router.patch("/books/:id", validateBookId, bookControllers.updateBookController);
router.delete(
    "/books/:id", 
    validateBookId, 
    bookControllers.deleteBookController
);

export default router;