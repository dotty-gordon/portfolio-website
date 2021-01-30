import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PostsController extends Controller {
    queryParams = ['section'];

    section = null;
}
