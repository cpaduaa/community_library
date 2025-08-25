import express from 'express'
import userRoutes from './src/routes/user.routes.js';
import bookRoutes from './src/routes/book.routes.js';
import 'dotenv/config.js'
const app = express()

app.use(express.json());
app.use(userRoutes);
app.use(bookRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});