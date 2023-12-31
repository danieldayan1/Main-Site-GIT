import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import helmet from 'helmet';

import RepositoriesRouter from './src/routes/repositories.route.js';
import { config  } from './src/configs/general.config.js';
import cors from 'cors';

const { port, hostname } = config;
const app = express();

app.use(logger('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())
app.use(cors({
    origin: '*'
}));

app.use('/repositories', RepositoriesRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(404));
});


/* Error handler middleware */
app.use((err, _req, res, _next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    
    return;
});
  
app.listen(port, hostname, () => {
    console.log(`listening at http://${hostname}:${port}`);
});

export default app;
