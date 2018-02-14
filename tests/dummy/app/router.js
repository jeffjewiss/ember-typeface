import Router from '@ember/routing/router';
import config from './config/environment';

const EmberRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

EmberRouter.map(function() {
});

export default EmberRouter;
