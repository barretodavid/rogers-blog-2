import { postsReducer } from './posts.reducer';
import { Post } from './models';
import { SavePostAction } from './posts.actions';

describe('postReducer', () => {
  describe('when having 2 posts already in the store', () => {
    let initialState: Post[];

    beforeEach(() => {
      initialState = [
        {
          id: 'f63f13e6-b2d6-413e-a7ed-0a6ed3ed37e1',
          title: 'Angular 7',
          content: 'Some new info about the Angular',
        },
        {
          id: '1167941f-5889-4965-96a7-84749a5c6da5',
          title: 'Redux',
          content: 'Your database in the frontend',
        },
      ];
    });

    describe('when saving a new post', () => {
      let post: Post;
      let action: SavePostAction;

      beforeEach(() => {
        post = {
          id: '03c68cb4-0325-43c8-bf70-0779817f8c62',
          title: 'React',
          content: 'Angular vs React',
        };
        action = new SavePostAction({ post });
      });

      it('should return a post array with 3 items', () => {
        const newState = postsReducer(initialState, action);
        expect(newState.length).toEqual(3);
      });

      it('should append the new post at the end of the array', () => {});
    });
    describe('when deleting a post', () => {
      it('should return a post array with 1 item', () => {});
      it('should delete the correct item for the array', () => {});
    });
    describe('when getting 1 post from the backend', () => {
      it('should return an array with just 1 element', () => {});
      it('should return the same array that we got from the store', () => {});
    });
  });
});
