import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';
import logger from './logger';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const port = 8000;
const app = express();
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});

app.use(middleware);

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.set('content-type', 'text/html');
  res.write(middleware.fileSystem.readFileSync(path.join(compiler.outputPath, 'index.html')));
  res.end();
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    logger.error(err);
  } else {
    logger.info(`Starting app in dev mode on port ${port}`);
    open(`http://localhost:${port}`);
  }
});
