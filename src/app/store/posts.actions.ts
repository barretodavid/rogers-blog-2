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

export enum GetAllPostsActionType {
  Start = '[Post] Get all Posts Start',
  Success = '[Post] Get all Posts Success',
  Error = '[Post] Get all Posts Error',
}

export class GetAllPostsStartAction implements Action {
  readonly type = GetAllPostsActionType.Start;
}

export class GetAllPostsSuccessAction implements Action {
  readonly type = GetAllPostsActionType.Success;
  constructor(public payload: { posts: Post[] }) {}
}

export class GetAllPostsErrorAction implements Action {
  readonly type = GetAllPostsActionType.Error;
  constructor(public payload: { error: string }) {}
}

export type GetAllPostsAction =
  | GetAllPostsStartAction
  | GetAllPostsSuccessAction
  | GetAllPostsErrorAction;

export type PostAction =
  | SavePostAction
  | DeletePostAction
  | GetAllPostsStartAction
  | GetAllPostsAction;
