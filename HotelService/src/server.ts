import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import sequelize from './db/models/sequelize';

const app = express();

app.use(express.json());



app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); 


app.use(appErrorHandler);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT, async() => {
      logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
      logger.info(`Press Ctrl+C to stop the server.`);
      await sequelize.authenticate();
      logger.info(`Database connection established successfully.`);
});

// Setup := npm install -D typescript ; npx tsc --init
// Run := npx ts-node src/server.ts