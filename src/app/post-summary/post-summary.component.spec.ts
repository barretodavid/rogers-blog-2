import { PostSummaryComponent } from './post-summary.component';
import { Post } from '../store/models';

describe('PostSummaryComponent', () => {
  describe('#onDeleteClick()', () => {
    it('should emit the id of the post passed as an input', () => {
      const post: Post = {
        id: 'f63f13e6-b2d6-413e-a7ed-0a6ed3ed37e1',
        title: 'Angular 7',
        content: 'Some new info about the Angular',
      };
      const component = new PostSummaryComponent();
      component.post = post;
      component.delete.subscribe(id => {
        expect(id).toEqual(post.id);
      });
      component.onDeleteClick();
    });
  });
});
