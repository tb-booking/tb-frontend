import webpack from 'webpack';
import webpackConfig from '../webpack.config.production';
import logger from './logger';

process.env.NODE_ENV = 'production'; // this assures the Babel dev config (for hot reloading) doesn't apply.

logger.info('Generating minified bundle for production via Webpack...');

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    logger.error(err);
    return err;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => logger.error(error));
  }

  if (jsonStats.hasWarnings) {
    logger.warn('Webpack generated the following warnings: ');
    jsonStats.warnings.map(warning => logger.warn(warning));
  }

  logger.info(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  logger.info('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!');
});
