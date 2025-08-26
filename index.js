import express from 'express'
import userRoutes from './src/routes/user.routes.js';
import bookRoutes from './src/routes/book.routes.js';
import loanRouters from './src/routes/loan.routes.js';
import 'dotenv/config.js'
import './src/service/cron.service.js'
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);
app.use(bookRoutes);
app.use(loanRouters);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});