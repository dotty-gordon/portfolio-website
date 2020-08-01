import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
    @service store;

    queryParams = {
    section: {
      refreshModel: true
    }
  };

	async model(params) {
	    return this.store.findAll('post');
	}
 }
