import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PostsController extends Controller {
  queryParams = ['section'];

  @tracked section = null;

  @tracked model;

  get filteredPosts() {
  	throw new TypeError;
    let section = this.section;
    let posts = this.model;

    if (section) {
      return posts.filterBy('section', section);
    } 
  }
}