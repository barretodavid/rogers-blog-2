import { SavePostAction, savePostActionType } from './posts.actions';
import { Post } from './models';

export function postsReducer(
  currentState = [],
  action: SavePostAction,
): Post[] {
  switch (action.type) {
    case savePostActionType:
      return [...currentState, action.payload];
    default:
      return currentState;
  }
}
