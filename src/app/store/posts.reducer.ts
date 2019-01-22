import {
  savePostActionType,
  PostAction,
  deletePostActionType,
} from './posts.actions';
import { Post } from './models';

import uuid4 from 'uuid4';

const initialPosts: Post[] = [
  {
    id: uuid4(),
    title: 'Angular 7',
    content: 'Some new info about the Angular',
  },
  { id: uuid4(), title: 'Redux', content: 'Your database in the frontend' },
];

export function postsReducer(
  currentState = initialPosts,
  action: PostAction,
): Post[] {
  switch (action.type) {
    case savePostActionType:
      return [...currentState, action.payload.post];
    case deletePostActionType:
      return currentState.filter(post => post.id !== action.payload.id);
    default:
      return currentState;
  }
}
