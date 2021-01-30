import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
    @service store;

    model(params) {
    	var postCatalog = this.store.findAll('post')
    	if(params.section == null) {
    		return postCatalog
    	} else {
    		return new Ember.RSVP.Promise(resolve => {
		   postCatalog.then(posts => {
		      resolve(posts.filterBy('section', params.section));
		    });
		  });
    	}
	}

 }
