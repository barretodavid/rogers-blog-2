import { Action } from '@ngrx/store';
import { Post } from './models';

export const savePostActionType = '[Post] Save Post';
export const deletePostActionType = '[Post] Delete Post';

export class SavePostAction implements Action {
  readonly type = savePostActionType;
  constructor(public payload: { post: Post }) {}
}

export class DeletePostAction implements Action {
  readonly type = deletePostActionType;
  constructor(public payload: { id: string }) {}
}

export type PostAction = SavePostAction | DeletePostAction;
