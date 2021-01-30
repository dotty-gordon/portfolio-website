	import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
 this.route('about', { path: '/about' });
 this.route('post', { path: '/post/:post_id' });
 this.route('posts', { path: '/posts'});
 this.route('books', { path: '/books' });
});
	