import {
  savePostActionType,
  PostAction,
  deletePostActionType,
} from './posts.actions';
import { Post } from './models';

export function postsReducer(currentState = [], action: PostAction): Post[] {
  switch (action.type) {
    case savePostActionType:
      return [...currentState, action.payload.post];
    case deletePostActionType:
      return currentState.filter(post => post.id !== action.payload.id);
    default:
      return currentState;
  }
}
