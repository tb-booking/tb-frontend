import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import logger from './logger';

const port = 8080;
const app = express();

app.use(compression());

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    logger.error(err);
  } else {
    logger.info(`Starting app in prod mode on port ${port}`);
    open(`http://localhost:${port}`);
  }
});
