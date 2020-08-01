import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr section;
  @attr title;
  @attr publish_date;
  @attr blurb;
  @attr image;
  @attr paragraph_one;
  @attr paragraph_two;
  @attr paragraph_three;

}
	