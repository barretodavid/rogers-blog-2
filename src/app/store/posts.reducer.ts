import { SavePostAction, savePostActionType } from './posts.actions';
import { Post } from './models';

const initialPosts: Post[] = [
  { title: 'Angular 7', content: 'Some new info about the Angular' },
  { title: 'Redux', content: 'Your database in the frontend' },
];

export function postsReducer(
  currentState = initialPosts,
  action: SavePostAction,
): Post[] {
  switch (action.type) {
    case savePostActionType:
      return [...currentState, action.payload];
    default:
      return currentState;
  }
}
